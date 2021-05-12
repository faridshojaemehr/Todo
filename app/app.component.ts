import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Guid} from 'guid-typescript';
import {Todo} from '../models/Todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    new Todo (Guid.create(),'Angular traning', false)
  ]

  onSubmit(form: NgForm){
    let todo = new Todo(Guid.create(),form.value.title,false);
    this.todos.push(todo)
    form.resetForm();
  }

  onComplate(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    todo.isComplate = true;
  }


  onDelete(id: Guid){
    let todo = this.todos.filter(x=>x.id === id)[0];
    let index = this.todos.indexOf(todo,0);
    if(index > -1){
      this.todos.splice(index,1);
    }
  }


}
