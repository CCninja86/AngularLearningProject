import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Task } from "./task.model";
import { DatePipe } from "@angular/common";
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from "../tasks/tasks.service";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.css"]
})
export class TaskComponent {

    @Input({ required: true }) task!: Task;
    @Output() complete = new EventEmitter<string>();

    constructor(private tasksService: TasksService) {}

    onCompleteTask() {
        this.tasksService.removeTask(this.task.id);
    }
}