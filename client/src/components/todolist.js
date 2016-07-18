//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, EventEmitter } from '@angular/core';

import { IconComponent } from './lib/icon'
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'todolist',
  inputs: ['list'],
  outputs: ['onSuccess', 'onRemove'],
  directives: [IconComponent],
  template: `
    <ul class="list-group">
        <li *ngFor="let todo of list"
            class="list-group-item list-group-item clearfix task"
            [class.success]="todo.isCompleted"
        >
            <p class="lead">{{todo.text}}</p>
            <span class="pull-right">
                <div class="btn-group">
                    <label class="btn btn-success" *ngIf="!todo.isCompleted" (click)="success(todo)">
                        <icon name="ok"></icon>
                    </label>
                     <label class="btn btn-primary">
                        <icon name="pencil"></icon>
                     </label>
                    <label class="btn btn-danger" (click)="remove(todo)">
                        <icon name="remove"></icon>
                    </label>
                </div>
            </span>
        </li>
    </ul>
  `
})
export class TodoListComponent {
    remove(todo) {
        this.onRemove.emit(todo);
    }

    success(todo) {
        this.onSuccess.emit(todo);
    }

    constructor() { 
        this.list = [];
        this.onSuccess = new EventEmitter();   
        this.onRemove = new EventEmitter();    
    }
}
