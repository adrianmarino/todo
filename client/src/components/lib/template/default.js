//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component } from '@angular/core';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'df-template',
  template: `
     <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <ng-content select="df-title"></ng-content>
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ng-content select="df-menu"></ng-content>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <!-- Begin page content -->
    <div class="container">
      <ng-content select="df-content"></ng-content>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted">
          <ng-content select="df-footer"></ng-content>
        </p>
      </div>
    </footer>
  `
})
export class DefaultTemplateComponent {
}