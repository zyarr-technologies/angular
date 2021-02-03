import { Injectable } from '@angular/core';
import {IBook} from './bookmodel'
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  booklistUrl = "http://localhost:5000/book";

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get<any>(this.booklistUrl);
  }
}
