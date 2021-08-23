import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  length = 0;
  hasCompleted$: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();
  completedAll$: Observable<boolean>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.hasCompleted$ = this.todoService.todos$.pipe(
      map(
        (todos) => todos.some((todo) => todo.isCompleted),
        takeUntil(this.destroy$)
      )
    );
    this.completedAll$ = this.todoService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted)),
      takeUntil(this.destroy$)
    );
    this.todoService.length$
      .pipe(takeUntil(this.destroy$))
      .subscribe((length) => {
        this.length = length;
      });
  }
  toggleAll() {
    this.todoService.toggleAll();
  }
  clearCompleted() {
    this.todoService.clearCompleted();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
