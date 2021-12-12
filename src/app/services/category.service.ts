import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../viewmodel/iresult-view-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpService:HttpClient) { }

  getAllCategories():Observable<IResultViewModel>
  {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Category`);
  }

  getCategoriesByDeptID(deptId: number): Observable<IResultViewModel> {
    if (deptId == 0) return this.httpService.get<IResultViewModel>(`${environment.APIURL}/categories`)
    else
      return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Category/Department/${deptId}`);
  }

  getCategoryByID(cID: number): Observable<IResultViewModel> {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Category/${cID}`)
  }
}
