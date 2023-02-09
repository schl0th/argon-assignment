import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDataList } from './models/cardData';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  cardData$: Observable<CardDataList>;

  constructor(dataService: DataService) {
    this.cardData$ = dataService.getData();
  }
}