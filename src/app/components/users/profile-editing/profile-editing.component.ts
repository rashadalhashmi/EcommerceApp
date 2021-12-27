import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';



function passwordMatch(c: AbstractControl): { [key: string]: boolean } | null {
  const passwordControl = c.get('password');
  const confirmPassword = c.get('confirmPassword');

  if (passwordControl?.pristine || confirmPassword?.pristine) {
    return null;
  }

  if (passwordControl?.value == confirmPassword?.value) {
    return null;
  }


  return { 'match': true };
}
@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss'],
})
export class ProfileEditingComponent implements OnInit {
  user: IuserSingUp = { } as IuserSingUp ;

  userForm: any;
  constructor(
    private userAuthservice:UserAuthService,
    private formBuilder: FormBuilder,
    private route: Router,
    private userAuthService:UserAuthService,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern("^01[0-2,5]{1}[0-9]{8}$")]],
      gender: "0"

    })


    let token= localStorage.getItem("Token")
    if(token!=null) {
     this.userAuthservice.getUserData(token);
     this.user.userId=this.userAuthService.getUserIdFromToken(token);
    }
    this.userAuthservice.userData$.subscribe(response=>{
        this.user=response;
        this.userForm.controls['firstName'].setValue(response.firstname);
        this.userForm.controls['lastName'].setValue(response.lastname);
        this.userForm.controls['email'].setValue(response.email);
        this.userForm.controls['address'].setValue(response.address);
        this.userForm.controls['phone'].setValue(response.phone);
        this.userForm.controls['username'].setValue(response.username);
        this.userForm.controls['gender'].setValue(response.gender+"");

    })



  }

  save() {


    this.user.firstname = this.userForm.value.firstName;
    this.user.lastname = this.userForm.value.lastName;
    this.user.email = this.userForm.value.email;
    this.user.phone = this.userForm.value.phone;
    this.user.address = this.userForm.value.address;
    this.user.username = this.userForm.value.username;
    this.user.gender = +this.userForm.value.gender;

    this.userAuthservice.updatUser(this.user).subscribe(response=>{
      console.log(response);
    })

    this.notificationService.success("Success")
    window.location.reload()
  }
}
