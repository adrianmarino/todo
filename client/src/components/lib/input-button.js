//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Component, EventEmitter, Inject } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  Validators
} from '@angular/forms';
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
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  inputs: ['placeholder', 'buttonLabel', 'buttonIcon' , 'buttonType'],
  outputs: ['onButtonClick'],
  template: `
    <form [formGroup]="form">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="{{placeholder}}" [formControl]="form.controls['text']" autofocus>
        <span class="input-group-btn">
          <button class="btn btn-{{buttonType}}" type="submit" (click)="buttonClick(form.controls['text'])">
            <span class="glyphicon glyphicon-{{buttonIcon}}"></span> {{buttonLabel}}
          </button>
        </span>
      </div>
    </form>   
  `
})
export class InputButtonComponent {

  buttonClick(text) {  
    this.onButtonClick.emit(text.value);
  }

  reset() {
    this.form.controls['text'].updateValue('');
    this.form.controls['text'].setErrors(null);
  }

  initalizeForm(fb) {
    this.fb = fb;
    this.form = this.fb.group({ 'text': ['', Validators.required] });
  }

  constructor(@Inject(FormBuilder) fb) {
    this.onButtonClick = new EventEmitter();
    this.buttonLabel = "default";
    this.initalizeForm(fb);
  }
}