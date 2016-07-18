//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
import { Http, Headers, RequestOptions } from '@angular/http';
//-----------------------------------------------------------------------------
//
//
//
//
//-----------------------------------------------------------------------------
// Connector
//-----------------------------------------------------------------------------
export class JSonConnector {

  post(url, data) {
    let body = JSON.stringify(data);
    let options = new RequestOptions({  headers: this.jsonContentTypeHeader() });
    return this.http.post(this.baseUrl + url, body, options).toPromise().catch(this.errorHandler);
  }

  get(url) {
    return this.http.get(this.baseUrl + url).toPromise().catch(this.errorHandler);
  }

  put(url, data) {
    let body = JSON.stringify(data);
    let options = new RequestOptions({  headers: this.jsonContentTypeHeader() });
    return this.http.put(this.baseUrl + url, body, options).toPromise().catch(this.errorHandler);    
  }

  delete (url) {
    return this.http.delete(this.baseUrl + url).toPromise().catch(this.errorHandler);
  }

  jsonContentTypeHeader() {
    return new Headers({ 'Content-Type': 'application/json' });
  }

  constructor(http, baseUrl, errorHandler) { 
    this.http = http;
    this.baseUrl = baseUrl;
    this.errorHandler = errorHandler;
  }
}