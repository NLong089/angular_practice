import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem{
  id:number;
  task:string;
  completed: boolean;
  description: string;
  deadline: string;
}

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  todoList : TodoItem [] = [];
  newTask:string = ''

  addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed: false,
        description: 'none',  
        deadline: new Date().toISOString().split('T')[0],  
      }

      this.todoList.push(newTodoItem)
      this.newTask = ''

    }
  }
    
  toggleCompleted(index :number):void{
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteTask(id:number):void{
    this.todoList = this.todoList.filter(item => item.id !== id )
  }

}
