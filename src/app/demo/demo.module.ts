import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'demo',
      component: DemoListComponent
    }])
  ],
  declarations: [DemoListComponent]
})
export class DemoModule { }
