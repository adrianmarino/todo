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
  inputs: ['title', 'icon'],
  template: `
    <br/>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{title}}  <span class="glyphicon glyphicon-{{icon}}" aria-hidden="true"></span></a>
        </div>
      </div>
    </nav>
  `
})
export class NavBarComponent {
  constructor() {
    this.title = 'Title';
    this.icon = 'asterisk'
  }
}