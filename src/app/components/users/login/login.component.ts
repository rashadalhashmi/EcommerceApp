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



  }

  onChange(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.checked = true;
    }
  }
}
