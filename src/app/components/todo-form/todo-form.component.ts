import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTaskEvent = new EventEmitter<Task>();
  task: FormControl = new FormControl();

  submit() {
    this.addTaskEvent.emit({ id: '', task: this.task.value, complete: false });
    this.task.setValue('');
  }
}
