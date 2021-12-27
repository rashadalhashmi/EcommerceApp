import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
import { OrderStatus } from 'src/app/viewmodel/OrderStatus.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrdersByCustomer(): Observable<IResultViewModel> {
    return this.httpClient.get<IResultViewModel>(`${environment.APIURL}/Order/Customer`);
  }

  getOrdersByStatus(status:OrderStatus): Observable<IResultViewModel> {
    const httpOption = {
      headers: new HttpHeaders(
      {
        'content-type': 'Application/JSON'
      }),
      params: new HttpParams(
        {
          fromObject: {
            Status : status,
          }
        }
      )
    }
    return this.httpClient.get<IResultViewModel>(`${environment.APIURL}/Order/Status`, httpOption);
  }

  updateStatusOfOrder(id:string, status: OrderStatus): Observable<any> {

    const httpOption = {
      headers: new HttpHeaders(
        {
          'content-type': 'Application/JSON',
        }),
    }
    const order =
    {
      "id": id,
      "orderStatus": status
    }
    return this.httpClient.put(`${environment.APIURL}/Order/Status`, JSON.stringify(order), httpOption);
  }
}
