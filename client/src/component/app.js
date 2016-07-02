//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component }      from '@angular/core';
import { Http, Headers }  from '@angular/http';
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
  constructor(http: Http) { this.http = http; }

  findAll() {
    this.http.get('http://localhost:8080/api/v1/todos')
      .subscribe(
        data => this.list = data.text(),
        err => this.logError(err.text()),
        () => console.log('Find all todos complete')
      );
  }
}
