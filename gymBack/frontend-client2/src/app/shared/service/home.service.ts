import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  urlClasses = "http://207.188.183.218:33333/classes/showClasses?columns=NAME,DESCRIPTION";
  urlRooms = "http://207.188.183.218:33333/rooms/showRooms?columns=NAME,DESCRIPTION,PHOTO";
  urlSubs = "http://207.188.183.218:33333/subscriptions/showSubs?columns=SUB_MONTHS,PRICE";
 constructor(private http:HttpClient){}

 getClasses() {
  return this.http.get<any>(this.urlClasses);
  }

  getRooms() {
    return this.http.get<any>(this.urlRooms);
    }

    getSubs() {
      return this.http.get<any>(this.urlSubs);
      }

}
