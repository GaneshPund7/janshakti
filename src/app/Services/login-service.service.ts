import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  // apiUrl = "mongodb://localhost:27017/api/myLogin"
  private apiUrl = 'http://localhost:3000/api/tasks'; 
  private jobData = 'mongodb://localhost:27017/api/jobdata'; 

  constructor(private http: HttpClient) { }
  createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }
  getAllTasks(){
    return this.http.get(this.apiUrl);
  }
}
