import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-exercise-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getList().subscribe(
      (data: Todo[]) => this.todoList = data,
      (error) => console.log(error)
    );
  }

  createTodo(inputValue: string) {
    this.postTodo({id: null, value: inputValue, checked: false});
  }

  postTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todoList.push(todo);
    });
  }
}
