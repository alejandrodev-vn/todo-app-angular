import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
// import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  hasTodo$: Observable<boolean>;

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todos$ = this.todoService.todos$;
    this.hasTodo$ = this.todoService.length$.pipe(map((length) => length > 0));
  }

  onChangeTodoStatus(todo: Todo) {
    this.todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }
  onChangeTodoContent(todo: Todo) {
    this.todoService.changeTodoContent(todo.id, todo.content);
  }
  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
