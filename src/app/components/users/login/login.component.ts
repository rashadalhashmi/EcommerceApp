import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import jwt_decode from 'jwt-decode';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { NavService } from 'src/app/services/navbar/nav.service';
import { MatDialogRef } from '@angular/material/dialog';
import { response } from 'express';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = {} as FormGroup;
  checked: boolean = false;
  user: string = "";

  constructor(private formBuilder: FormBuilder,
    private userAuthServices: UserAuthService,
    private router: Router,
    private profileService: ProfileService,
    private NavService: NavService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ["", [Validators.required]],
        password: ["", [Validators.required]],
        rememberMe: true
      }
    )

  }

  login() {
    this.userAuthServices
    .Login(this.loginForm.value.username,
                this.loginForm.value.password,this.loginForm.value.rememberMe)


    // this.userServices.Login(this.loginForm.value['username'],
    //   this.loginForm.value['password'],
    //   this.checked)
    //   .subscribe({
    //     next: (token) => {
    //       if (token.data != "") {
    //         localStorage.setItem("token", token.data);

    //         this.profileService.getProfile().subscribe({
    //           next: (profile) => {
    //             this.user = profile.data.firstname + " " + profile.data.lastname
    //             this.NavService.userEmitter.emit(this.user)
    //             localStorage.setItem("Islogged", true.toString());
    //           }
    //         });
    //         this.router.navigate(['/Home']);
    //         alert("Login Successfully");
    //         (document.getElementsByClassName("cdk-overlay-container")[0] as HTMLElement).hidden = true;
    //         window.location.reload();
    //       }
    //       else
    //       {
    //         alert("Not User Register Please");
    //         localStorage.setItem("Islogged", false.toString());
    //       }

          // if(decoded)
          // {
          //   // alert("Login Please");
          //   this.router.navigate(['User/SignUp']);
          // }
          // console.log(token.data)
          // // console.log(decoded.UserID)
          // console.log(JSON.stringify(decoded).includes("customer"));
    //     }
    //   });

    // this.router.navigate(['/Home']);
  }

  onChange(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.checked = true;
    }
  }
}
