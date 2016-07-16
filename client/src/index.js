//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import 'babel-polyfill';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import './rxjs-operators'


import { AppComponent } from './components/app';
import { TodoService } from './services/todo';
import { TodoConnector } from './connectors/todo-connector';
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Boot
//-----------------------------------------------------------------------------
bootstrap(AppComponent, [
    TodoService,
    TodoConnector,
  
    HTTP_PROVIDERS,
    provideForms()
]).catch(err => console.error(err));