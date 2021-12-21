import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import {  ModalDismissReasons, NgbModual} from "@ng-bootstrap/ng-bootstrap";
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { ICart } from 'src/app/model/ICartItem';
import { CartService } from 'src/app/services/cartService/cart.service';
import { NavService } from 'src/app/services/navbar/nav.service';
import { ProductService } from 'src/app/services/product/product.service';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { LoginRegisterViewComponent } from '../users/login-register-view/login-register-view.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  IsLogged: boolean = localStorage.getItem("Islogged") == true.toString();
  User: string = "user";
  userName: string = "";
  password: string = "";

  searchInp: string = "";

  cartQuanity: number = 0;
  constructor(public dialog: MatDialog,
    public NavService: NavService,
    private cartService: CartService,
    private userAuth: UserAuthService,
    private profileService:ProfileService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe({
      next: (cart) => {
        this.cartQuanity = cart.items.length;
      }
    })

    this.userAuth.isloginstatues().subscribe({
      next: (Islogged) => {
        this.IsLogged = Islogged;
        this.profileService.getProfile().subscribe({
          next: (profile) => {
            debugger;
            this.User = profile.data.user.firstname + " " + profile.data.user.lastname
            this.NavService.userEmitter.emit(this.User)
          }
        });
        localStorage.setItem("Islogged", this.IsLogged.toString());
      }
    });

    this.NavService.userEmitter.subscribe(data => {
      debugger;
      this.User = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginRegisterViewComponent, {
      width: '50%',

      data: { userName: this.userName, password: this.password },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
  }

  search() {
    this.NavService.productsSearch.emit(this.searchInp);
  }

  Logout() {
    this.userAuth.Logout();
    this.router.navigate(["/Home"])
    //this.isUserLogged = this.userAuth.isLogged();
  }
}
