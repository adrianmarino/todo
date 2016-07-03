//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { CoverTemplateComponent } from './lib/template/cover';
import { TodoListComponent } from './todolist';
import { IconComponent } from './lib/icon'
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
  directives: [CoverTemplateComponent, IconComponent, TodoListComponent],
  template: `
    <cv-template>

      <cv-title>
        TODOS <icon name="ok"></icon>
      </cv-title>

      <cv-menu>
        <a class="nav-link active" href="#">Sign In</a>
        <a class="nav-link" href="#">Contact</a>
      </cv-menu>

      <cv-content>
        <div class="lead">
          <todolist [list]="todos"></todolist>
        </div>
      </cv-content>

      <cv-footer>
        <p>Writed by <a href="#">Adrian Norberto Marino</a>. (adrianmarino@gmail.com)</p>
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
