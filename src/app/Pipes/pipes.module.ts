import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitPipe } from './unit.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnitPipe, SortPipe ],
  exports:[UnitPipe, SortPipe ]
})
export class PipesModule { }
