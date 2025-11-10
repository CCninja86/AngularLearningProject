import { Component, Input } from "@angular/core";

import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { type NewTaskData } from "../task/task.model";
import { TasksService } from "./tasks.service";


@Component({
    selector: "app-tasks",
    standalone: true,
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"],
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

    @Input({ required: true }) userID!: string;
    @Input({ required: true }) name!: string;
    isAddingTask = false;

    constructor(private tasksService: TasksService) {}

    getSelectedUserTasks() {
        return this.tasksService.getUserTasks(this.userID);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = false;
    }
}