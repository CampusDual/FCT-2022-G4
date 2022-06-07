import { Injectable, Injector } from '@angular/core';
import { Observable, OntimizeBaseService, Util } from 'ontimize-web-ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CalendarService extends OntimizeBaseService{

  url:String = 'http://207.188.182.136:33333/roomsClasses/roomClass';



  constructor(private http:HttpClient, protected injector: Injector) {
    super(injector);

  }

  protected buildHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8'
    });
    const sessionId = this.authService.getSessionInfo().id;
    if (Util.isDefined(sessionId)) {
      headers = headers.append('Authorization', 'Bearer ' + sessionId);
    }
    return headers;
  }


  public getEvents(){
    const options = {
      headers : this.buildHeaders()
    };
    return this.http.get(this.url + '' , options);
  }


}