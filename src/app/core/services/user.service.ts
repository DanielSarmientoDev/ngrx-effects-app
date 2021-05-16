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
    return this.http.get(`${environment.API_URL}/users`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
