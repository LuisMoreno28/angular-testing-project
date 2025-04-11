import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';
  nuevatarea: string = '';
  tareas: string[] = [
    'Comprar',
    'Limpiar'
  ];



  addTask(task: string) {
    this.tareas.push(task);


  }


  deleteTask(task: string) {
    const index = this.tareas.indexOf(task);
    if (index > -1) {
      this.tareas.splice(index, 1);
    }
    
  }

  getTasks(): string[] {
    return [];
  }

  updateTask(task: string) {
    const index = this.tareas.indexOf(task);
    if (index > -1) {
      this.tareas[index] = task;
    }
  }
}
