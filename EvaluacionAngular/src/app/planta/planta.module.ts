import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';

@NgModule({
  imports: [
    CommonModule,RouterModule,
  ],
  declarations: [PlantaListComponent],
  exports: [
    PlantaListComponent
  ]
})
export class PlantaModule { }
