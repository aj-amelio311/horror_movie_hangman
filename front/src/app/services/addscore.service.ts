import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddscoreService {
  private _url:string = "http://ec2-13-58-206-123.us-east-2.compute.amazonaws.com:8080/add_high_score";
  constructor(private _http: Http) { }

  addScoretoDB(formData:string) {
    return this._http.post(this._url, JSON.parse(formData));
  }

}
