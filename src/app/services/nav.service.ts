import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _open:boolean = false ;
  public open$:BehaviorSubject<boolean>;

  constructor() {
    this.open$=new BehaviorSubject<boolean>(this._open);
  }

  toggle(){
    this._open =!this._open;
    this.open$.next(this._open)
    console.log(this._open);
  }
}
