import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../viewmodel/iresult-view-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }

  getProfile():Observable<IResultViewModel>
  {
    return this.httpClient.get<IResultViewModel>(`${environment.APIURL}/Profile/MyProfile`);
  }
}
