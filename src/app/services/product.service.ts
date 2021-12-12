import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../viewmodel/iresult-view-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpClient) { }

  getAllProducts():Observable<IResultViewModel>
  {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product`);
  }

  getProductsByCategoryID(categoryId: number): Observable<IResultViewModel> {
    if (categoryId == 0) return this.httpService.get<IResultViewModel>(`${environment.APIURL}/products`)
    else
      return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product/Category/${categoryId}`);
  }

  getProductByID(pID: number): Observable<IResultViewModel> {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product/${pID}`)
  }
}
