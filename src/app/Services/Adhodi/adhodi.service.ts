import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdhodiService {

  private apiUrlAdhodi = 'http://localhost:3000/api/adhodiData';
  // adhodiData
  private apiUrlAkhatwade = 'http://localhost:3000/api/akhatwadeData';

  constructor(private http: HttpClient) { }

  getAdhodiData(): Observable<any> {
    return this.http.get<any>(this.apiUrlAdhodi);
  }

  getAkhatwadeData(): Observable<any> {
    return this.http.get<any>(this.apiUrlAkhatwade);
  }

  postAdhodiData(task: any) {
    return this.http.post(this.apiUrlAdhodi, task);
  }
  postAkhadwadeData(task: any) {
    return this.http.post(this.apiUrlAkhatwade, task);
  }
}
