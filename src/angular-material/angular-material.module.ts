import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from "@angular/material/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';


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
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatSidenavModule

]
@NgModule({
  imports: [MaterialComponent ],
  exports:[ MaterialComponent]
})
export class AngularMaterialModule {}
