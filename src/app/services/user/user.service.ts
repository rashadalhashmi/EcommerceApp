import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';
import { Observable } from 'rxjs';
import { json } from 'express';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  signUP(user:IuserSingUp):Observable<IResultViewModel>{

   return this.httpclient.post<IResultViewModel>(environment.APIURL+"/Account/SignUp", JSON.stringify(user) , {
     headers:new HttpHeaders({
       'content-type':'application/json'
     })
   } );
  }

  login (userName: string, password: string, rememberMe: boolean) :Observable<IResultViewModel>{
    const httpOption = {
      headers: new HttpHeaders(
      {
        'content-type': 'Application/JSON'
      }),
      params: new HttpParams(
        {
          fromObject: {
            Username : userName,
            Password : password,
            IsRemembered : rememberMe,
            UserRole : "customer"
          }
        }
      )
    }
   return this.httpclient.post<IResultViewModel>(`${environment.APIURL}/Account/Login`, null, httpOption);
  }

  getUserData(token:string):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders(
      {
        'content-type': 'Application/JSON',
        'Authorization': `Bearer ${token}`
      }),


    }
     return this.httpclient.get(`${environment.APIURL}/Profile/MyProfile`, httpOption);

  }
}
