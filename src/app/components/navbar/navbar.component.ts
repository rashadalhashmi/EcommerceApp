import { Component, OnInit } from '@angular/core';
// import {  ModalDismissReasons, NgbModual} from "@ng-bootstrap/ng-bootstrap";
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavService } from 'src/app/services/nav.service';
import { LoginRegisterViewComponent } from '../users/login-register-view/login-register-view.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName: string = "";
  password: string = "";

  // constructor(){}
  constructor(public dialog: MatDialog,public NavService :NavService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginRegisterViewComponent, {
      width: '40%',

      data: {userName: this.userName, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
  }
}
