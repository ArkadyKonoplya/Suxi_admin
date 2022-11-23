import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../interceptors/auth.guard';
import { login, Register, Role } from '../models/user';
const apiBaseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiLoginUrl = apiBaseUrl + 'api/Accounts/Login'  //URL to web API
  private apiRegisterUrl = apiBaseUrl + 'api/Accounts/Registration';  //URL to web API

  constructor(private http: HttpClient, private authGuard: AuthGuard) { this.http = http; }

   //For Login User
  login(user: login): Observable<any> {
    return this.http.post(this.apiLoginUrl, user)
      .pipe(map((res: any) => {
        if (res.isAuthSuccessful) {
          let user = {
            id: 'test',
            first_Name: res.firstName,
            last_Name: res.lastName,
            email: res.email,
            authToken: res.token,
            role: res.roles
          }
          this.authGuard.setCurrentUserValue(user);
        }
        return res;
      }));
  }

  //For Register User
register(user: Register): Observable < any > {
  return this.http.post(this.apiRegisterUrl, user)
    .pipe(map((res: any) => {
      if (res.isAuthSuccessful) {
        let user = {
          id: 'test',
          first_Name: res.firstName,
          last_Name: res.lastName,
          email: res.email,
          authToken: res.token,
          role: res.roles
        }
        this.authGuard.setCurrentUserValue(user);
      }
      return res;

    }));
}

}