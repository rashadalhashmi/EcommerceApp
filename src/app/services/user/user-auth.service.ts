import { HttpClient, HttpEvent, HttpHandler,  HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';
import { NotificationService } from '../notification.service';
import { UserService } from './user.service';
import jwt_decode from 'jwt-decode';
import { IuserToken } from 'src/app/viewmodel/user/IuserToken';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user: IuserSingUp = {} as IuserSingUp;

  private _isLoggedSubject: BehaviorSubject<boolean>;
  private _userData: BehaviorSubject<IuserSingUp>;
  public userData$:Observable<IuserSingUp>;

  constructor(private httpService: HttpClient,
    private cookiesService: CookieService, private userService: UserService,
    private notificationService: NotificationService) {
    this._isLoggedSubject = new BehaviorSubject<boolean>(false);
    this._userData = new BehaviorSubject<IuserSingUp>(this.user);
    this.userData$=this._userData.asObservable();
  }

  Login(userName: string, password: string, rememberMe: boolean) {
    this.userService.login(userName, password, rememberMe).subscribe(response => {
      if (response.isSuccess == true) {
        localStorage.setItem("Token", response.data);
        rememberMe ? localStorage.setItem('rememberMe', 'ok') : "";
        this.getUserData(response.data);
        this._isLoggedSubject.next(true);

      }
      else {
        this.notificationService.error(response.message)
      }
      console.log(response);
    })
  }
  signUp(user: IuserSingUp) {
    this.userService.signUP(user).subscribe(response => {
      if (response.isSuccess == true) {
        this.notificationService.success("you sign up succefully");
        localStorage.setItem("Token", response.data);
        this.getUserData(response.data);
        localStorage.setItem('rememberMe', 'ok');
        this._isLoggedSubject.next(true);
      }
      else { this.notificationService.error(response.data[0].description); }

      console.log(response)
    })
  }

  Logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('rememberMe');
    localStorage.removeItem("username");
    this._isLoggedSubject.next(false);

  }

  loginStatus(): Observable<boolean> {
    if (localStorage.getItem('Token')) {
      this._isLoggedSubject.next(true);
    }
    return this._isLoggedSubject.asObservable();
  }

  getUserIdFromToken(token: string): string {
    let userid = jwt_decode<IuserToken>(token).UserID;
    return userid;
  }
  getUserData(token:string)
  {
    this.userService.getUserData(token).subscribe(response=>{
    localStorage.setItem("username",response.data.username)
    this._userData.next(response.data);
    this._isLoggedSubject.next(true);
    console.log(response.data)
     })
  }

 updatUser(user:IuserSingUp) : Observable<any>{
   return this.userService.updateUser(user);
 }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`
      }
    });

    return next.handle(request);
  }




}
