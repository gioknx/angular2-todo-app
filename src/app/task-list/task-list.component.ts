import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../shared/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  
  @Output() taskSelected = new EventEmitter<Task>();
  
  tasks: Task[] = [
  new Task("Limpar chao", "Favor limpar o chao"),
  new Task("Cagar no chao", "Favor limpar o chao"),
  new Task("Varrer o chao", "Favor varrer o chao")];


  constructor() { }

  ngOnInit() {
      this.tasks[0].complete();
      console.log("Completou task #01");
  }

  onClickedTask(task){
    this.taskSelected.emit(task);
  }
}
