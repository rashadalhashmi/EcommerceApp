import { Component, OnInit } from '@angular/core';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EcommerceApp';
  open:boolean=false;


  constructor(public NaveService:NavService){}
  ngOnInit(): void {
    this.NaveService.open$.subscribe(open=>this.open=open);

  }
}
