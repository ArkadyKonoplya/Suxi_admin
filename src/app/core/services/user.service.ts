import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../interceptors/auth.guard';
import { login, Register } from '../models/user';
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
        //Temporary
        let tempuser = {
          id: 'test',
          first_Name: 'test',
          last_Name: 'test',
          email: 'test',
          password_Hash: 'test',
          authToken: res.token,
          created_On: 'test',
        }
        if (res.isAuthSuccessful) {
          this.authGuard.setCurrentUserValue(tempuser)
        }
        return res;
      }));
  }

  //For Register User
register(user: Register): Observable < any > {
  return this.http.post(this.apiRegisterUrl, user)
    .pipe(map((res: any) => {
      return res;
    }));
}

}