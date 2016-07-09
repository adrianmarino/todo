//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { DefaultTemplateComponent } from './lib/template/default';
import { TodoListComponent } from './todolist';
import { InputButtonComponent } from './lib/input-button'
import { AuthorComponent } from './lib/author';
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
  directives: [DefaultTemplateComponent, AuthorComponent, TodoListComponent, InputButtonComponent],
  template: `
    <df-template>
      <df-title>ToDoS</df-title>
      <df-content>
        <div class="col-xs-12 col-sm-12 col-md-offset-3 col-md-5 col-lg-offset-3 col-lg-5">
          <input-button placeholder="Write a todo..." btn_label="Add" btn_icon="plus" btn_type="primary"></input-button>
          <hr/>
          <todolist [list]="todos"></todolist>
        </div>
      </df-content>
      <df-footer class="pull-right">
        <author name="Adrian Norberto Marino" email="adrianmarino@gmail.com" github="adrianmarino"></author>
      </df-footer>
    </df-template>
  `
})
export class AppComponent {
  constructor(@Inject(TodoService) service) { 
    this.service = service;
    this.findAll();
  }
  findAll() { this.service.findAll(response => this.todos = response.json()); }
}
