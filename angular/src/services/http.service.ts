import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'http://localhost:8080';
  constructor(private http: Http) {

  }

  public get(url: string) {
    return this.http.get(encodeURI(this.baseUrl + url)).pipe(map(
      (response) => {
      return response.json();
    }),catchError(this.handleError));
  }

  public post(url: string, params: any) {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(encodeURI(this.baseUrl + url), params,options).pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    // return an observable with a user-facing error message
    return throwError(
      'Error al hacer la peticion');
  };
}




