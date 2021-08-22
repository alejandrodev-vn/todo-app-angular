import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TodoService } from 'src/app/services/todo.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  @Input() isShow: boolean;

  ngOnInit() {}
  constructor(private todoService: TodoService) {}
  todoFormControl = new FormControl('', {
    validators: [Validators.required],
  });
  matcher = new MyErrorStateMatcher();
  onSubmit() {
    if (this.todoFormControl.value.trim() === '') {
      return false;
    }
    this.todoService.addTodo(this.todoFormControl.value);
    this.todoFormControl.reset('');
  }
}
