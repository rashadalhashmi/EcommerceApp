import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../viewmodel/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user: IUser = {} as IUser;
  constructor(private httpService: HttpClient, private cookiesService: CookieService) { }

  Login(userName: string, password: string, rememberMe: boolean) {
    this.user.UserName = userName;
    this.user.Password = password;

    if(rememberMe) {
      this.cookiesService.set('userName', userName);
      this.cookiesService.set('Password', password);
    }

    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'Application/JSON'
      })
    }
    return this.httpService.post(`${environment.APIURL}/User/Login`, JSON.stringify(this.user), httpOption);
  }
}
