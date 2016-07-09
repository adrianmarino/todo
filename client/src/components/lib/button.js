//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component } from '@angular/core';
import { IconComponent } from './icon';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
@Component({
  selector: 'ns-button',
  inputs: ['label', 'type', 'icon'],
  directives: [IconComponent],
  template: `
    <button class="btn btn-{{type}}" type="button">
        <icon [name]="icon"></icon> <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
    constructor() {
        this.type  = "default";
    }
}
