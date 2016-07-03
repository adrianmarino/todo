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
  selector: 'cv-template',
  template: `
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">
                <ng-content select="cv-title"></ng-content>
              </h3>
              <nav class="nav nav-masthead">
                 <ng-content select="cv-menu"></ng-content>
              </nav>
            </div>
          </div>

          <ng-content select="cv-content"></ng-content>

          <div class="mastfoot">
            <div class="inner">
              <ng-content select="cv-footer"></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CoverTemplateComponent {
}