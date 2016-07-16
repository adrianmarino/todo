//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, EventEmitter } from '@angular/core';
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
  inputs: ['type', 'icon'],
  outputs: ['onClick'],
  directives: [IconComponent],
  template: `
    <button class="btn btn-{{type}}" type="button" (click)="buttonClick($event)">
        <icon [name]="icon"></icon> <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
    buttonClick() { this.onClick.emit(); }

    constructor() {
        this.onClick = new EventEmitter();
        this.type  = "default";
    }
}
