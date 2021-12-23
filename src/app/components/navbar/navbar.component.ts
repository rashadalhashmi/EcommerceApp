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
  IsLogged: boolean = false;
  userName: string = "user";
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
        console.log(cart)
        if(Object.keys(cart).length === 0)
        {
          this.cartQuanity = 0;
        }
        else
        {
          this.cartQuanity = cart.items.length;
        }
      }
    })


    this.userAuth.loginStatus().subscribe(islogin=>{
      this.IsLogged=islogin;
        this.userName=localStorage.getItem('username')??'user'

    })





  }

  openDialog(): void {
     this.dialog.open(LoginRegisterViewComponent, {
      data: { userName: this.userName, password: this.password },
    });


  }

  search() {
    this.NavService.productsSearch.emit(this.searchInp);
  }

  Logout() {
    this.userAuth.Logout();
    this.router.navigate(["/Home"])
  }
}
