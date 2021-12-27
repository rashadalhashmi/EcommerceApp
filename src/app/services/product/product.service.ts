import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResultViewModel } from '../../viewmodel/iresult-view-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpClient, private router:Router) { }

  getAllProducts(page:number, pageSize:number): Observable<IResultViewModel> {
    const httpOption = {
      headers: new HttpHeaders({
        'content-type': 'Application/JSON'
      }),
      params: new HttpParams(
        {
          fromObject:
          {
            PageNumber : page,
            PageSize: pageSize
          }
        }
      )
    }

    let param = {
      PageNumber: page,
      PageSize: pageSize
    }
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product`, httpOption);
  }

  getProductsByCategoryID(categoryId: string): Observable<IResultViewModel> {
    if (categoryId == "0") return this.httpService.get<IResultViewModel>(`${environment.APIURL}/products`)
    else
      return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product/Category/${categoryId}`);
  }

  getProductByID(pID: string): Observable<IResultViewModel> {
    return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product/${pID}`)
  }

  search(prodName: string): Observable<IResultViewModel> {
    this.router.navigate(["/Home"])
    if (prodName == "")
      return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product`)
    else
      return this.httpService.get<IResultViewModel>(`${environment.APIURL}/Product/Name/${prodName}`);
  }
}
