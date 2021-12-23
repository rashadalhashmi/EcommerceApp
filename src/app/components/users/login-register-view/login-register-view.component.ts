import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IUser } from 'src/app/viewmodel/iuserLogin';

@Component({
  selector: 'app-login-register-view',
  templateUrl: './login-register-view.component.html',
  styleUrls: ['./login-register-view.component.scss']
})
export class LoginRegisterViewComponent implements OnInit {

  // constructor(){}
  constructor(
    public dialogRef: MatDialogRef<LoginRegisterViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser,
    private userAuthService :UserAuthService
  ) {}

  ngOnInit(): void {
    this.userAuthService.loginStatus().subscribe(islogin=>{
      if(islogin){
        this.dialogRef.close();

      }
    })
  }

}
