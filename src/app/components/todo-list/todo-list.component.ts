import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() taskChange = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  onTaskChanged(task: Task, change: MatCheckboxChange) {
    this.taskChange.emit({
      ...task,
      complete: change.checked,
    });
  }
}
