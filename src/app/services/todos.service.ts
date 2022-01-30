import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // a private variable that will hold our state
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  // a public variable that returns an observable from our state
  public tasks$: Observable<Task[]> = this._tasks
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor() {}

  // a helper to get the actual values from the state, not an observable.
  get tasks() {
    return this._tasks.getValue();
  }

  addItem(task: Task) {
    task.id = uuidv4();
    this._tasks.next([...this.tasks, task]);
  }

  updateItem(todo: Task) {
    const index = this.tasks.findIndex((item) => item.id === todo.id);
    const tasks = this.tasks;
    tasks[index] = todo;
    this._tasks.next([...tasks]);
  }

  deleteItem(todo: Task) {
    const tasks = this.tasks.filter((item) => item.id !== todo.id);
    this._tasks.next([...tasks]);
  }

  clearAll() {
    this._tasks.next([]);
  }

  populateDummyData() {
    this.addItem({
      id: uuidv4(),
      task: 'Todo Item 1',
      complete: false,
    });
    this.addItem({
      id: uuidv4(),
      task: 'Todo Item 2',
      complete: true,
    });
    this.addItem({
      id: uuidv4(),
      task: 'Todo Item 3',
      complete: false,
    });
  }
}
