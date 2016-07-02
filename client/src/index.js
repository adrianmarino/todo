//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import 'babel-polyfill';
import 'zone.js/dist/zone';
import {bootstrap }         from '@angular/platform-browser-dynamic';
import { AppComponent }     from './component/app';
import { HTTP_PROVIDERS }   from '@angular/http';
//-----------------------------------------------------------------------------
//
//
//
//-----------------------------------------------------------------------------
// Boot
//-----------------------------------------------------------------------------
bootstrap(AppComponent, [HTTP_PROVIDERS])
