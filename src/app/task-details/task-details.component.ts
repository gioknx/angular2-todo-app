import { Component, OnInit, Input } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: Task;
  
  constructor() { }

  ngOnInit() {
  }

}
