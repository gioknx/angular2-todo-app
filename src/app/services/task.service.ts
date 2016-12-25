import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Task } from "../shared/task";


@Injectable()
export class TaskService {
  taskAdded: Subject<string> = new Subject<string>();

  _tasks: Task[] = [
  new Task("Limpar chao", "Favor limpar o chao"),
  new Task("Cagar no chao", "Favor limpar o chao"),
  new Task("Varrer o chao", "Favor varrer o chao")];

  get tasks(): Task[]{
    return this._tasks;
  }

  addTask(task){
    this._tasks.push(task);
  }
  constructor() { }

}
