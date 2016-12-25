import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from "../shared/task";

import { TaskService } from './../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task("", "");  



  private _showCreateForm: Boolean = false;
  get showCreateForm(): Boolean{
    return this._showCreateForm;
  }

  set showCreateForm(value: Boolean){
    this._showCreateForm = value;
  }


  @Output() onCreatedTask = new EventEmitter<Task>();

  onSubmit(){
    // Calc dueTo property based on dueDate and dueTime
    this.task.setDueTo();

    this.taskService.addTask(this.task);
    this.task = new Task("","");
  }
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

}
