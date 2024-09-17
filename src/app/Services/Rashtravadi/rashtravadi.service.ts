import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RashtravadiService {

  private Rashtravadi = 'http://localhost:3000/api/jobdata'; 
  constructor(private http: HttpClient) { }

  createTaskRashtrvadi(task: any) {
    return this.http.post(this.Rashtravadi, task);
  }
  getAllTasks(){
    return this.http.get(this.Rashtravadi);
  }
}
