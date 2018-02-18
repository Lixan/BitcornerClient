import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './index';
import {Bitweet, User} from '../_models/index';
import {HttpClient} from '@angular/common/http';
import {ServiceHelper} from '../_helpers';
import {BitweetService} from './bitweet.service';

@Injectable()
export class UserService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  private serviceHelper: ServiceHelper;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private http: HttpClient, private bitweetService: BitweetService) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS


}
