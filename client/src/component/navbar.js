//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, Inject, Input } from '@angular/core';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'navbar',
  inputs: ['title', 'icon', 'phase'],
  template: `
    <br/>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{title}}: {{phase}}</a>
        </div>
      </div>
    </nav>
  `
})
export class NavBarComponent {
  constructor() {
    this.title = '>> Title <<';
  }
}