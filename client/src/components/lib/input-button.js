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
  selector: 'input-button',
  inputs: ['placeholder', 'btn_label', 'btn_icon' , 'btn_type'],
  template: `
    <div class="input-group">
      <input type="text" class="form-control" placeholder="{{placeholder}}">
      <span class="input-group-btn">
        <button class="btn btn-{{btn_type}}" type="button">
          <span class="glyphicon glyphicon-{{btn_icon}}"></span> {{btn_label}}
        </button>
      </span>
    </div>   
  `
})
export class InputButtonComponent {
  constructor() {
    this.btn_type = "default";
  }
}