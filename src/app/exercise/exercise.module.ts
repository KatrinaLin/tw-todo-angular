import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TodoItemComponent } from './index/todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'exercise',
      component: IndexComponent
    }])
  ],
  declarations: [IndexComponent, TodoItemComponent]
})
export class ExerciseModule { }
