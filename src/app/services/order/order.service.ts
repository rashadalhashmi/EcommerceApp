import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/viewmodel/iorder';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  getOrders(CID: string): Observable<IResultViewModel> {
    return this.httpClient.get<IResultViewModel>(
      `${environment.APIURL}/Order/Customer/${CID}`
    );
  }

  // this service for orserstatus
  // orderstatus(status:number):Observable<IOrder>{
  //   return this.httpClient.put<IOrder>(`${environment.APIURL}/Order/Customer/${status}`);
  // }
}
