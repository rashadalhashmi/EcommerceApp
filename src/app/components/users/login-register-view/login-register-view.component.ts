import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
