//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component } from '@angular/core';
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
  directives: [IconComponent],
  template: `
    <ul class="list-group">
        <li *ngFor="let todo of list; let number=index" 
            class="list-group-item
                    list-group-item-{{ todo.isCompleted ? 'success' : 'warning'}}">
            <span class="badge">{{number + 1}}</span>
            {{todo.text}}
            <icon *ngIf="todo.isCompleted" name="ok"> </icon>
        </li>
    </ul>
  `
})
export class TodoListComponent {
    constructor() { this.list = []; }
}
