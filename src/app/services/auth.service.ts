import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _register = ("");
  constructor(private http: HttpClient) { }
  register(user){
    return this.http.post<any>(this._register,user);

  }
  getToken(){
    
  }
}
