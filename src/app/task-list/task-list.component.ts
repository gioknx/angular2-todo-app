import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../shared/task";

import { TaskService } from './../services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  @Output() taskSelected = new EventEmitter<Task>();
  
  private tasks:Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.tasks;
    this.tasks[0].complete();
  }

  onClickedTask(task){
    this.taskSelected.emit(task);
  }
}
