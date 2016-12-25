import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../shared/task";

import { TaskService } from './../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task("", "");  

  @Output() onCreatedTask = new EventEmitter<Task>();

  onSubmit(){
    this.onCreatedTask.emit(this.task);
    this.taskService.addTask(this.task);
    this.task = new Task("","");
  }
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

}
