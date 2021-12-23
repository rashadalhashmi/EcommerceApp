import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../../viewmodel/iresult-view-model';
import jwt_decode from 'jwt-decode';
//import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this.httpClient.get(`${environment.APIURL}/Profile/MyProfile`);
  }

  // this service for update user profile
  updateUserprofile(data: any) {
    return this.httpClient.put(
      `${environment.APIURL}/Profile/MyProfile/edite`,
      data
    );
  }
}
