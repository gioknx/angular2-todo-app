import { Component, OnInit, Input } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})


export class TaskComponent implements OnInit {
  @Input() task: Task;
  private _showCompleteButton: Boolean = false;

  get showCompleteButton() : Boolean {
    return this._showCompleteButton;
  }
  set showCompleteButton(value : Boolean) {
    console.log(value);
    this._showCompleteButton = value;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
