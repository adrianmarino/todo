//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import 'babel-polyfill';
import 'zone.js/dist/zone';
import {bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app';
import { HTTP_PROVIDERS } from '@angular/http';
import { TodoService } from './services/todo';
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Boot
//-----------------------------------------------------------------------------
bootstrap(AppComponent, [HTTP_PROVIDERS, TodoService])
