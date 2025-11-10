import { Component, Input } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from "./dummy-tasks";
import { NewTaskComponent } from "../new-task/new-task.component";


@Component({
    selector: "app-tasks",
    standalone: true,
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"],
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

    @Input() id?: string;
    @Input() name?: string;
    isAddingTask = false;

    tasks = dummyTasks;

    get assignedTasks() {
        return this.tasks.filter(task => task.userId === this.id);
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
}