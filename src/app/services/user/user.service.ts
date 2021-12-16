import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';
import { Observable } from 'rxjs';
import { json } from 'express';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  signUP(user:IuserSingUp):Observable<any>{

   return this.httpclient.post(environment.DOTNETAPI+"/Account/SignUp", JSON.stringify(user) , {
     headers:new HttpHeaders({
       'content-type':'application/json'
     })
   } );
  }
}
