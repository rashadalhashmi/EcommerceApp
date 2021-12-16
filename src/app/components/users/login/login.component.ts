import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import jwt_decode from 'jwt-decode';
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
    this.userServices.Login(this.loginForm.value['username'],
                            this.loginForm.value['password'],
                            this.checked)
                            .subscribe({
      next: (token) => {
        localStorage.setItem("token", token.data);
        var decoded = jwt_decode(token.data);
        this.router.navigate(['/Home']);
        // if(decoded)
        // {
        //   // alert("Login Please");
        //   this.router.navigate(['User/SignUp']);
        // }
        console.log(decoded)
        console.log(JSON.stringify(decoded).includes("customer"));
      }
    });

    this.router.navigate(['/Home']);
  }

  onChange(event:Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.checked = true;
    }
  }
}
