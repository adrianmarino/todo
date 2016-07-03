//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { CoverTemplateComponent } from './lib/template/cover';
import { TodoListComponent } from './todolist';
import { IconComponent } from './lib/icon'
import { AuthorComponent } from './lib/author'
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
  directives: [CoverTemplateComponent, IconComponent, AuthorComponent, TodoListComponent],
  template: `
    <cv-template>
      <cv-title>
        TODOS <icon name="ok"></icon>
      </cv-title>
      <cv-menu>
        <a class="nav-link active" href="#">Sign In</a>
      </cv-menu>
      <cv-content>
        <div class="lead" style="text-align-last: left">
          <a href="#" class="btn btn-lg btn-secondary">
            <icon name="plus"></icon>
          </a>
        </div>
        <div class="lead">
          <todolist [list]="todos"></todolist>
        </div>
      </cv-content>
      <cv-footer>
        <author name="Adrian Norberto Marino" email="adrianmarino@gmail.com" github="adrianmarino"></author>
      </cv-footer>
    </cv-template>
  `
})
export class AppComponent {

  constructor(@Inject(TodoService) service) { 
    this.service = service;
    this.findAll();
  }

  findAll() { this.service.findAll(response => this.todos = response.json()); }

}
