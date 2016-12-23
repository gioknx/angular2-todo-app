import { Component, OnInit, Input } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})


export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { 
  }

  ngOnInit() {
  }

}
