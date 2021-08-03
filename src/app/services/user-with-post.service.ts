import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserWithPost} from "../models/IUserWithPost";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserWithPostService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) {
  }

  getAllUsersWithPosts(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url);
  }

  getUserWithPostById(id: number): Observable<IUserWithPost[]>{
    return this.httpClient.get<IUserWithPost[]>(this.url + '/' + id + '/posts');
  }
}

