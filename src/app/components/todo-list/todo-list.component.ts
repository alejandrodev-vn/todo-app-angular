import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO_LIST } from 'src/app/mockup/todo-list.mockup';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
// import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  todos$: Observable<Todo[]>
  constructor(private todoService: TodoService) {

  }
  ngOnInit(){
    this.todos$ = this.todoService.todos$
  }



}


