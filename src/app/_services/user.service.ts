import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import { AuthenticationService } from './index';
import {Bitweet, User} from '../_models/index';
import {HttpClient} from '@angular/common/http';
import {ServiceHelper} from '../_helpers';
import {BitweetService} from './bitweet.service';

@Injectable()
export class UserService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  public currentUser: User;
  private serviceHelper: ServiceHelper;

  private usersSource = new ReplaySubject<User>(1); // Used to store and notify data to the view component
  public usersObservable = this.usersSource.asObservable(); // Read by the view component

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private http: HttpClient, private bitweetService: BitweetService) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public getUser(userId: number): void {
    const params = new Map<string, string>([['id', userId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('getUser', params);

    this.http.get<User>(url).subscribe(data => { this.usersSource.next(data); });
  }

}
