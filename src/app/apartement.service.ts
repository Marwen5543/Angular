import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApartementService {
  getSameValueOf(list:any[], critiria:string, value:any){
    let nb=0;
    list.forEach(element => {
      if(element[critiria] == value){
          nb++;
      }
    });
    return nb;
  }
  constructor() { }
}
