//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  template: `
    <header>
      <h1 class="title">TODO</h1>
    </header>

    <section>
      <hr>
      <h3>{{ list }}</h3>
      <button (click)="findAll()">Get All</button>
    <section>
  `
})
export class AppComponent {
  constructor(@Inject(TodoService) service) { this.service = service; }

  findAll() {
    this.service.findAll(data => this.list = data.text());
  }
}
