import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = {} as FormGroup;
  constructor(private formBuilder: FormBuilder, private userServices: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    )
  }

  login() {
    let userName = this.loginForm.value['username'];
    let password = this.loginForm.value['password'];
    this.userServices.Login(userName, password).subscribe({
      next: (user) => console.log(user)
    });
    this.router.navigate(['/Home']);
  }
}
