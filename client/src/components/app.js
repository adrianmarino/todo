//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject, ViewChild } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl } from '@angular/forms';

import { DefaultTemplateComponent } from './lib/template/default';
import { TodoListComponent } from './todolist';
import { InputButtonComponent } from './lib/input-button'
import { AuthorComponent } from './lib/author';

import { ButtonComponent } from './lib/button';
import { TodoService } from '../services/todo';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'app',
  directives: [DefaultTemplateComponent, ButtonComponent, AuthorComponent, TodoListComponent,
               InputButtonComponent, REACTIVE_FORM_DIRECTIVES],
  template: `
    <df-template>
      <df-title>ToDoS</df-title>
      <df-content>
        <div class="col-xs-12 col-sm-12 col-md-offset-3 col-md-5 col-lg-offset-3 col-lg-5">
          <input-button placeholder="Write a todo..." buttonLabel="Add" buttonIcon="plus" buttonType="primary"
              (onButtonClick)="onAddTodo($event)" #inputTodo>
          </input-button>
          <hr/>
          <todolist [list]="todos" (onRemove)="remove($event)"></todolist>
        </div>
      </df-content>
      <df-footer class="pull-right">
        <author name="Adrian Norberto Marino" email="adrianmarino@gmail.com" github="adrianmarino"></author>
      </df-footer>
    </df-template>
  `
})
export class AppComponent {
  @ViewChild('inputTodo') inputTodo;

  onAddTodo(text) { 
    this.service.create(text).then(res => {
      this.inputTodo.reset();
      this.all();
    });
  }

  all() {
    this.service.all().then(response => this.todos = response ? response.json() : []);
  }
  
  remove(todo) {
    this.service.remove(todo.id).then(res => this.all());
  }

  constructor(@Inject(TodoService) service) { 
    this.service = service;
    this.all();
  }
}
