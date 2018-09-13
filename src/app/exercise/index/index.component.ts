import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  todoList = [{ "id": 1, "value": "todo item 1", "checked": false },
    { "id": 2, "value": "todo item 2", "checked": false }];

  constructor() { }

  ngOnInit() {
  }

}
