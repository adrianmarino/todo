//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { NavBarComponent } from './navbar';
import { TodoService } from '../service/todo';
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
  directives: [NavBarComponent],
  template: `
    <div class="container">
      <navbar title="TODOS" phase="Simple todo crud" icon="glyphicon glyphicon-ok"></navbar>
      <div class="well well-lg">
        <ul class="list-group">
          <li *ngFor="let todo of todos; let number=index" 
              class="list-group-item
                     list-group-item-{{ todo.isCompleted ? 'success' : 'warning'}}">
             <span class="badge">{{number + 1}}</span>
            {{todo.text}}
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor(@Inject(TodoService) service) { 
    this.service = service;
    this.findAll();
  }

  findAll() {
    this.service.findAll(response => this.todos = response.json());
  }
}
