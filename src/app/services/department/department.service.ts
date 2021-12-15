import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../../viewmodel/iresult-view-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpService: HttpClient) { }

  getAllDepartments():Observable<IResultViewModel>
  {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Department`);
  }

  getDepartmentbyId(dID:number):Observable<IResultViewModel>
  {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Department/${dID}`);
  }
}
