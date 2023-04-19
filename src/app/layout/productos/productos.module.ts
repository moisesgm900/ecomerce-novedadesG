import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from 'src/app/components/material/material.module';
import { DialogacountComponent } from './dialogaccount/dialog.component';

import { DialogComponent } from './dialog/dialog.component';
import {CustomMatPaginatorIntl} from "../../../paginator-es";
import {MatPaginatorIntl} from "@angular/material/paginator";

@NgModule({
  declarations: [
    ProductosComponent,
    DialogComponent,
    DialogacountComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatSlideToggleModule,
    MaterialModule
  ],
  providers:[
    {provide: MatPaginatorIntl,
      useValue:CustomMatPaginatorIntl()}
  ]
})
export class ProductosModule { }
