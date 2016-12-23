import { Component, OnInit } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task("", "");

  onSubmit(){
    console.log(this.task);
  }
  constructor() { }

  ngOnInit() {
  }

}
