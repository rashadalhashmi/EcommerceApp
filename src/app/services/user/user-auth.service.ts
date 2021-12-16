import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
import { environment } from 'src/environments/environment';
import { IUser } from '../../viewmodel/iuserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user: IUser = {} as IUser;
  private loginstatues:BehaviorSubject<boolean>;

  constructor(private httpService: HttpClient, private cookiesService: CookieService) {
    this.loginstatues = new BehaviorSubject<boolean>(false);
  }

  Login(userName: string, password: string, rememberMe: boolean): Observable<IResultViewModel> {
    // this.user.Username = userName;
    // this.user.Password = password;
    // this.user.IsRemembered = rememberMe;
    // this.user.UserRole = "9c6d3c3f-bbc5-43d3-af89-bfd566c9ed94";

    if (rememberMe) {
      this.cookiesService.set('userName', userName);
      this.cookiesService.set('Password', password);
    }

    const httpOption = {
      headers: new HttpHeaders({
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
    this.loginstatues.next(true);
    return this.httpService.post<IResultViewModel>(`${environment.APIURL}/Account/Login`, null, httpOption);
  }

  Logout() {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    this.loginstatues.next(false);
    return false;
  }

  isloginstatues():Observable<boolean>
  {
    return this.loginstatues.asObservable();
  }
}
