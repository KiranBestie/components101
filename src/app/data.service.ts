import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cars = [
    'ford', 'chevrolet', 'buick'
  ];

  myData() {
    return 'This is my data, man!';
  }
}
