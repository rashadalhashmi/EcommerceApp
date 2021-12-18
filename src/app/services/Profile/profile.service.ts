import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../../viewmodel/iresult-view-model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }

  getProfile():Observable<any>
  {
    return this.httpClient.get(`${environment.APIURL}/Profile/MyProfile`);
  }
}
