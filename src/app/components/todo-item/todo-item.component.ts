import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { fadeStrikeThroughAnimation } from 'src/app/animations/animations';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [fadeStrikeThroughAnimation],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() changeContent: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered: boolean = false;
  isEditing: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  changeTodoStatus() {
    this.changeStatus.emit({
      ...this.todo,
      isCompleted: !this.todo.isCompleted,
    });
  }
  submitEdit(event: Event) {
    event.preventDefault();
    this.changeContent.emit(this.todo);
    this.isEditing = false;
  }
  handleDeleteTodo() {
    this.deleteTodo.emit(this.todo);
  }
}
