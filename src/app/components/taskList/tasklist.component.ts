import {Component} from "@angular/core";
import {TaskService} from "../../services/task.service";
import {TaskModel} from "../../models/task.model";
@Component({
    selector: 'task-list',
    templateUrl: './tasklist.component.html',
})
export class TaskListComponent{
    public taskList : TaskModel[] = [];
    constructor(private _taskService : TaskService){
        this.taskList = _taskService.getAllTasks();
    }
    
    
    
}