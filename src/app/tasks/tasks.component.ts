import { Component, Input } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from "./dummy-tasks";
import { NewTaskComponent } from "../new-task/new-task.component";
import { type NewTaskData } from "../task/task.model";


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

    tasks = dummyTasks;

    get assignedTasks() {
        return this.tasks.filter(task => task.userId === this.userID);
    }

    onCompleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCancelAddTask() {
        this.isAddingTask = false;
    }

    onAddTask(taskData: NewTaskData) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: this.userID,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });

        this.isAddingTask = false;
    }
}