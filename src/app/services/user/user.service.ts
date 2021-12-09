import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';
import { Observable } from 'rxjs';
import { json } from 'express';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  signUP(user:IuserSingUp){

  //  return this.httpclient.post('https://localhost:5001/api/Account/SignUp', JSON.stringify(user) , {
  //    headers:new HttpHeaders({
  //      'content-type':'application/json'
  //    })
  //  } );
  }
}
