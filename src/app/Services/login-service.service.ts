import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  apiUrl = "https://sp3newbackend.onrender.com/api/tasks"

  constructor(private http: HttpClient) { }
  createTask(task: any) {
    return this.http.post(this.apiUrl, task);
  }
}
