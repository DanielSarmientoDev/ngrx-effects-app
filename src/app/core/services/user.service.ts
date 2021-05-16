import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(`${environment.API_URL}/users?dealy=4`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  getUser(id: string) {
    return this.http.get(`${environment.API_URL}/users/${id}?dealy=4`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
