import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item:Todo;

  isHovered: boolean = false;
  isEditing: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
