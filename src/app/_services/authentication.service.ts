import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {ServiceHelper} from '../_helpers';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models';
import {UserService} from './user.service';

@Injectable()
export class AuthenticationService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  public token: string;
  private serviceHelper: ServiceHelper;
  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private http: HttpClient, private userService: UserService) {
    this.serviceHelper = new ServiceHelper();

    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public login(username: string, password: string): Observable<boolean> {
    const params = new Map<string, string>([['username', username], ['password', password]]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('connect', params);
    return this.http.get<User>(url)
      .map(user => {
        // should login successful if there's a jwt token in the response
        if (user) {
          // set token property
          this.token = 'fake-jwt-token';

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('currentUserToken', JSON.stringify(this.token));

          // return true to indicate successful login
          return true;
        } else {
            // return false to indicate failed login
            return false;
        }
      });
  }

  public logout(): void {
      // clear token remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('currentUser');
  }
}
