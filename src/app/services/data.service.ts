import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDataList } from '../models/cardData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }

  getData(): Observable<CardDataList> {
    return this.httpclient.get<CardDataList>('/assets/data/cardData.mock.json');
  }
}
