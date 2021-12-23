import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user/user-auth.service';
import jwt_decode from 'jwt-decode';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  isUserLogged:boolean = false;
  constructor(private userAuthService:UserAuthService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // this.isUserLogged = this.userAuthService.isLogged();
    let token = localStorage.getItem("Token");

    if(token == null)
      return false;

    let decoded = jwt_decode(token);
    if(!JSON.stringify(decoded).includes("Customer"))
    {
      alert("Login Please");
        this.router.navigate(['User/Login']);
        return false
    }
    return true;
  }
}
