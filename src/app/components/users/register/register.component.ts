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
      firstname: "rashad",
      lastname: "alhashmie",
      email: "rashaami@gamil.com",
      username: "rad2kk021",
      password: "djf125522445",
      gender: 0,
      address: "cairo,nasercity",
      phone: "01128289672",
      image: "llf/dff",
      userRole: "Customer"
     }

  userForm:any;
  constructor(
         private formBuilder:FormBuilder,
         private route :Router,
         private userService:UserService)

         {
         this.userService.signUP(this.user).subscribe(data=>console.log(data))

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

    console.log(this.userForm.value);

    // this.user.id=Math.floor(Math.random()*1000)+"";
    // this.user.firstName=this.userForm.get('firstName').value
    // this.user.lastName=this.userForm.get('lastName').value;
    // this.user.password=this.userForm.get('passwordGroup.password').value;
    // this.user.username=this.userForm.get('email').value;
    // this.user.Token="slfjk-sdfkjdkl55f-d45df4-dfllk"

    // this.userHttp.createUser(this.user).subscribe(res=>{
    //   this.route.navigate(['user/login'])
    //     console.log(res);

    // });
  }
}
