import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Gender } from 'src/app/viewmodel/Gender';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';



function passwordMatch(c:AbstractControl):{[key:string]:boolean}|null{
  const passwordControl=c.get('password');
  const confirmPassword=c.get('confirmPassword');

  if(passwordControl?.pristine||confirmPassword?.pristine){
    return null ;
  }

  if(passwordControl?.value==confirmPassword?.value){
    return null ;
  }


  return {'match':true};
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user :IuserSingUp=
    {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      gender: 0,
      address: "",
      phone: "",
      image: "",
      userRole: "Customer"
     }

  userForm:any;
  constructor(
         private formBuilder:FormBuilder,
         private route :Router,
         private userService:UserService)

         {

         }

  ngOnInit(): void {

  this.userForm= this.formBuilder.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.maxLength(50)]],
    email:['',[Validators.required,Validators.email]],
    passwordGroup:this.formBuilder.group({
    password:['',[Validators.required,Validators.minLength(7)]],
    confirmPassword:['',[Validators.required]]
    },{validator: passwordMatch}),
    username:['',[Validators.required,Validators.minLength(6)]],
    address:['',[Validators.required,Validators.maxLength(50)]],
    phone:['',[Validators.required,Validators.pattern("^01[0-2,5]{1}[0-9]{8}$")]],
    gender:"0"
   })


  }

  save(){

    // console.log(this.userForm.value);

    this.user.firstname=this.userForm.value.firstName;
    this.user.lastname=this.userForm.value.lastName;
    this.user.email=this.userForm.value.email;
    this.user.password=this.userForm.value.passwordGroup.password;
    this.user.phone=this.userForm.value.phone;
    this.user.gender=this.userForm.value.gender;
    this.user.address=this.userForm.value.address;
    this.user.username=this.userForm.value.username
    // console.log(this.user);

    this.userService.signUP(this.user).subscribe(data=>console.log(data))


  }
}
