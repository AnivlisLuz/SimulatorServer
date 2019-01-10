import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = '';
  constructor(private http: Http) {

  }

  public get(url: string) {
    return this.http.get(encodeURI(this.baseUrl + url)).pipe(map(
      (response) => {
      return response.json();
    }),catchError(handleError));
  }

  public post(url: string, params: any) {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(encodeURI(this.baseUrl + url), params,options).pipe(catchError(handleError));
  }

}

function handleError(error: any) {
  // alert('An error occurred:\n' + error);
  // console.error('An error occurred: ', error);
  return Observable.throw(error.message || error);
}


