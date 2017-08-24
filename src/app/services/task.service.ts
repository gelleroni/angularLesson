import {Injectable} from "@angular/core";


import {TaskModel} from '../models/task.model';

@Injectable()
export class TaskService{
  private  _taskList : TaskModel[] = [];


  
  public getAllTasks():TaskModel[]{
      return this._taskList;
  }

  public addTask(task : TaskModel){
      this._taskList.push(task);
  }
}