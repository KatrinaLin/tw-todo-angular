import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'exercise',
      component: IndexComponent
    }])
  ],
  declarations: [IndexComponent]
})
export class ExerciseModule { }
