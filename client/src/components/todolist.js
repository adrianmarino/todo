//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap';

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
  directives: [BUTTON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, IconComponent],
  template: `
    <ul class="list-group">
        <li *ngFor="let todo of list" class="list-group-item list-group-item clearfix task">
            <p class="lead">{{todo.text}}</p>
            <span class="pull-right">
                <div class="btn-group">
                    <label class="btn btn-success">
                        <icon name="ok"></icon>
                    </label>
                     <label class="btn btn-primary">
                        <icon name="pencil"></icon>
                     </label>
                    <label class="btn btn-danger">
                        <icon name="remove"></icon>
                    </label>
                </div>
            </span>
        </li>
    </ul>
  `
})
export class TodoListComponent {
    constructor() { this.list = []; }
}
