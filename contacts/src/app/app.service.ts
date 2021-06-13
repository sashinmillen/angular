import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>('https://randomuser.me/api/?results=10');
  }
}
