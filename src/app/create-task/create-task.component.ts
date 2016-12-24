import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task("", "");  

  @Output() onCreatedTask = new EventEmitter<Task>();

  onSubmit(){
    console.log(this.task);
    this.onCreatedTask.emit(this.task);
  }
  constructor() { }

  ngOnInit() {
  }

}
