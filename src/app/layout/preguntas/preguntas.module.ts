import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreguntasRoutingModule } from './preguntas-routing.module';
import { PreguntasComponent } from './preguntas.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from 'src/app/components/material/material.module';


@NgModule({
  declarations: [
    PreguntasComponent
  ],
  imports: [
    CommonModule,
    PreguntasRoutingModule,
    MatSlideToggleModule,
    MaterialModule
  ]
})
export class PreguntasModule { }
