import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = {} as FormGroup;
  checked:boolean = false;
  constructor(private formBuilder: FormBuilder,
              private userServices: UserAuthService,
              private router: Router,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: [this.cookieService.get('userName'), [Validators.required]],
        password: [this.cookieService.get('Passord'), [Validators.required]],
        rememberMe: []
      }
    )
    this.loginForm.controls['rememberMe'].valueChanges.subscribe(checked =>
      this.checked = checked
    );
  }

  login() {
    let userName = this.loginForm.value['username'];
    let password = this.loginForm.value['password'];
    let rememberMe = this.checked;
    this.userServices.Login(userName, password, rememberMe).subscribe({
      next: () => console.log(rememberMe)
    });

    this.router.navigate(['/Home']);
  }

  onChange(event:Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.checked = true;
    }
  }
}
