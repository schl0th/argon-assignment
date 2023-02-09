import { Component, Input, OnChanges } from '@angular/core';
import { CardDataList } from '../models/cardData';

@Component({
  selector: 'app-datacard',
  templateUrl: './datacard.component.html',
  styleUrls: ['./datacard.component.scss']
})
export class DatacardComponent implements OnChanges {

  @Input()
  cardDataList: CardDataList | null = [];
  cardRows: CardDataList[] = [];

  ngOnChanges(): void {
    this._generateMultiDimArray();
  }

  private _generateMultiDimArray(): void {
    console.log('card data list', this.cardDataList);
    const dataList: CardDataList = this.cardDataList || [];
    // check number of items
    const dataLength: number = dataList.length;
    // can handle this in different manner if required
    if (dataLength == 0) return;
    // check if number is 4
    if (dataLength == 4) {
      // if yes, 2x2
      this._generateRows(dataList, 2);
    } else {
      // else, check divisability by 5
      if (this._isDivisible(dataLength, 5)) {
        // if yes, make rows of 5 items
        this._generateRows(dataList, 5);
      } else {
        // else, check divisibility by 3
        if (this._isDivisible(dataLength, 3)) {
          // if yes, check if quotient is more than 5
          if (this._isQuotientTooMuch(dataLength, 5)) {
            // if yes, make rows of 5 items with last row less than 5
            this._generateRows(dataList, 5);
          } else {
            // else, make rows of 3 items
            this._generateRows(dataList, 3);
          }
        } else {
          // else, check divisibility by 4
          if (this._isDivisible(dataLength, 4)) {
            // if yes, check if quotient is more than 5
            if (this._isQuotientTooMuch(dataLength, 4)) {
              // if yes, make rows of 5 items with last row less than 5
              this._generateRows(dataList, 5);
            } else {
              // else, make rows of 4
              this._generateRows(dataList, 4);
            }
          } else {
            // else, make rows of 5 items with last row less than 5
            this._generateRows(dataList, 5);
          }
        }
      }
    }
  }

  private _isDivisible(dividend: number, divisor: number): boolean {
    return dividend % divisor == 0;
  }

  private _generateRows(dataList: CardDataList, itemPerRow: number): void {
    const length = dataList.length;
    this.cardRows = [];
    for (let i = 0; i < Math.ceil(length / itemPerRow); i++) {
      let rowItems: CardDataList = [];
      for (let j = i * itemPerRow; j < (i + 1) * itemPerRow; j++) {
        if (j < length)
          rowItems.push(dataList[j]);
      }
      this.cardRows.push(rowItems);
    }
    console.log('rows', this.cardRows);
  }

  private _isQuotientTooMuch(dividend: number, divisor: number): boolean {
    return dividend / divisor > 5
  }

}
