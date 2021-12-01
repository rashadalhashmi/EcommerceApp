import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from "@angular/material/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

/**
 * angular material component
 */
const MaterialComponent=[
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatRippleModule,
  MatBadgeModule,
  MatInputModule,
  MatTabsModule
]
@NgModule({
  imports: [MaterialComponent ],
  exports:[ MaterialComponent]
})
export class AngularMaterialModule {}
