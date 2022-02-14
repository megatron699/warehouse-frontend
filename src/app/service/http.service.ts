import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {EntityId} from "../model/EntityId.js";
import {baseUrl} from '../../environments/environment';

@Injectable()
export class HttpService<T extends EntityId> {

  private baseUrl: string = baseUrl;

  public setBaseUrl(urlTable: string) {
    this.baseUrl += urlTable;
  }

  constructor(private http: HttpClient) {
  }

  public getData() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get(this.baseUrl, httpOptions);
  }

  public postData(element: T) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const body = JSON.stringify(element);
    return this.http.post(this.baseUrl, body, httpOptions);
  }

  public deleteData(element: T) {
    return this.http.delete(this.baseUrl + '/' + String(element.id));
  }

  public putData(element: T) {
    return this.http.post(this.baseUrl, element, {responseType: 'json'});
  }
}
