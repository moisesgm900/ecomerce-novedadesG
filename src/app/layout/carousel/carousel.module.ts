import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import {CarouselComponent } from './carousel.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from 'src/app/components/material/material.module';


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    MatSlideToggleModule,
    MaterialModule
  ]
})
export class CarouselModule { }
