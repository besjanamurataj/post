import { Post } from 'src/app/models/post';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comments } from '../models/comments';
import { User } from '../models/user';

const baseUrl = `${environment.apiURL}`
const userBaseUrl=`${environment.userUrl}`
// const commentsBaseUrl= `${environment.commentsUrl}`
@Injectable({
  providedIn: 'root',
})

export class BlogService {
  constructor(private _http: HttpClient) {}
  //get all post
  get(): Observable<Post[]> {
    return this._http.get<Post[]>(baseUrl);
  }
  getComment(): Observable<Comments[]> {
    return this._http.get<Comments[]>(baseUrl);
  }
  // get a post by id
  getPost(id): Observable<Post[]> {
    return this._http.get<Post[]>(`${baseUrl}/${id}`);
  }
  // delete a post
   delete(id: string) {
     return this._http.delete(`${baseUrl}/${id}`);
   }
   //create a post
  create(post:Post) {
    return this._http.post<Post>(baseUrl,post);
  }

// update a post
  update(id: string,params:any) {
    return this._http.put<Post>(`${baseUrl}/${id}`,params);
  }
  //get all users
 getUsers():Observable<User[]>{
  return this._http.get<User[]>(userBaseUrl)
 }
//  getById(id:string){
//    return this._http.get<Post>(`${baseUrl}/${id}`)
//  }
}
