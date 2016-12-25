import { Component, OnInit, Input } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})


export class TaskComponent implements OnInit {
  @Input() task: Task;
  private _hover: Boolean = false;

  get hover() : Boolean {
    return this._hover;
  }
  set hover(value : Boolean) {
    this._hover = value;
  }

  onCompleteClick(){
    this.task.complete();
  }
  constructor() { 
  }

  ngOnInit() {
  }

}
