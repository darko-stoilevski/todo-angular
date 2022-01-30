import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from './models/task';
import { TodoService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  uncompletedTasks$: Observable<Task[]> = this.todoService.tasks$.pipe(
    map((items) => items.filter((item) => item.complete === false))
  );

  completedTasks$: Observable<Task[]> = this.todoService.tasks$.pipe(
    map((items) => items.filter((item) => item.complete === true))
  );

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.populateDummyData();
  }

  updateTask(toDo: Task) {
    this.todoService.updateItem(toDo);
  }

  addTask(item: Task) {
    this.todoService.addItem(item);
  }

  clearAll() {
    this.todoService.clearAll();
  }
}
