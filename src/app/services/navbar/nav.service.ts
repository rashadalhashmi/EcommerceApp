import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _open:boolean = false ;
  public open$:BehaviorSubject<boolean>;
  public productsSearch: EventEmitter<string> = new EventEmitter<string>();
  public userEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    this.open$=new BehaviorSubject<boolean>(this._open);
  }

  toggle(){
    this._open =!this._open;
    this.open$.next(this._open)
    console.log(this._open);
  }
}
