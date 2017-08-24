import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {TaskService} from './services/task.service';
import {TaskComponent} from './components/taskForm/task.components';
import {TaskListComponent} from './components/taskList/tasklist.component';

@NgModule({
  declarations: [
    AppComponent, TaskComponent,TaskListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
