import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './list/index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'demo',
      component: IndexComponent
    }])
  ],
  declarations: [IndexComponent]
})
export class DemoModule { }
