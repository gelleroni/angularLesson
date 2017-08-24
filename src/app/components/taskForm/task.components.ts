import {Component} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {TaskModel} from "../../models/task.model";
@Component({
    selector: 'task-form',
    templateUrl: './taskform.component.html',
})
export class TaskComponent{

    public task : TaskModel = new TaskModel ;
    
    constructor(private _taskService : TaskService){}
    
    
    public addTask(){
        this._taskService.addTask(this.task);
    }
}