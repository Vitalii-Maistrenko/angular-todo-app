import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
  private apiUrl = 'https://example.com/api/data';

  constructor(private http: HttpClient) {}

  sendData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
