import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetscoresService {
  private _url:string = "http://ec2-13-58-206-123.us-east-2.compute.amazonaws.com:8080/high_scores";
  constructor(private _http: Http) { }

  getScores() {
    return this._http.get(this._url);
  }

}
