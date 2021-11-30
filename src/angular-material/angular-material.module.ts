import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from "@angular/material/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';


const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatRippleModule,
  MatBadgeModule,
  MatInputModule
]
@NgModule({
  imports: [MaterialComponent ],
  exports:[ MaterialComponent]
})
export class AngularMaterialModule {}
