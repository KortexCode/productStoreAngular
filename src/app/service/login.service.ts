import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myApiUrl: string = environment.endpoint;
    constructor(private _http: HttpClient) {

    }
    //Loguear
    postlogin(user:any) {
      return this._http.post(`${this.myApiUrl}/users/login`, user);
    }
    postCreateUser(user:any) {
      return this._http.post(`${this.myApiUrl}/users/create/user`, user);
    }
}
