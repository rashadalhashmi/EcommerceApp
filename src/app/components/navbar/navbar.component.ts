import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import {  ModalDismissReasons, NgbModual} from "@ng-bootstrap/ng-bootstrap";
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ICart } from 'src/app/model/ICartItem';
import { CartService } from 'src/app/services/cartService/cart.service';
import { NavService } from 'src/app/services/navbar/nav.service';
import { ProductService } from 'src/app/services/product/product.service';
import { LoginRegisterViewComponent } from '../users/login-register-view/login-register-view.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName: string = "";
  password: string = "";

  searchInp:string = "";

  cartQuanity:number = 0;
  constructor(public dialog: MatDialog,
              public NavService :NavService,
              private cartService:CartService) {
  }

  ngOnInit(): void {

    this.cartService.cart.subscribe({
      next: (cart) =>
      {
        this.cartQuanity = cart.items.length;
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginRegisterViewComponent, {
      width: '50%',

      data: {userName: this.userName, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.password = result;
    });
  }

  search()
  {
    this.NavService.productsSearch.emit(this.searchInp);
  }
}
