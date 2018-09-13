import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-exercise-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  todoList = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getList().subscribe(
      (data: any[]) => this.todoList = data,
      (error) => console.log(error)
    );
  }
}
