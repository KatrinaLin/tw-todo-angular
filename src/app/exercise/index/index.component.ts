import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {Todo} from "./todo";
import {t} from "@angular/core/src/render3";

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

  addTodo(inputValue: string) {
    this.postTodo({id: null, value: inputValue, checked: false});
  }

  postTodo(todo: Todo) {
    this.todoService.postTodo(todo).subscribe(todo => {
      this.todoList.push(todo);
    });
  }

  changeChecked(todoItem: Todo) {
    this.updateTodo({id: todoItem.id, value: todoItem.value, checked: !todoItem.checked});
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(
      todo => {
        this.todoList.find(item => item.id === todo.id).checked = todo.checked;
    });
  }
}
