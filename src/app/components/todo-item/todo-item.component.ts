import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() task: Partial<Task> = {};
  @Output() taskChanged = new EventEmitter<MatCheckboxChange>();

  constructor() {}

  ngOnInit(): void {}
}
