//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component } from '@angular/core';
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
  template: `
    <ul class="list-group">
        <li *ngFor="let todo of list; let number=index" 
            class="list-group-item
                    list-group-item-{{ todo.isCompleted ? 'success' : 'warning'}}">
            
            <span class="badge">{{number + 1}}</span>
            {{todo.text}}
            <span *ngIf="todo.isCompleted" class="glyphicon glyphicon-ok" aria-hidden="true"> </span>
        </li>
    </ul>
  `
})
export class TodoListComponent {
    constructor() {
        this.list = [];
    }
}
