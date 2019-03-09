import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private _url:string = "http://ec2-13-58-206-123.us-east-2.compute.amazonaws.com:8080/answers";
  constructor(private _http: Http) { }

  getAnswers() {
    return this._http.get(this._url)
  }

}
