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
  public currentUser: User;
  private serviceHelper: ServiceHelper;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private http: HttpClient, private bitweetService: BitweetService) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS

  public createBitweet(bitweet: Bitweet): void {
    const params = new Map<string, string>([
      ['id', bitweet.id.toString()],
      ['message', bitweet.message],
      ['nbVotes', bitweet.nbVotes.toString()],
      ['comments', 'NULL'],
      ['idChannel', bitweet.idChannel.toString()],
      ['idUser', bitweet.idUser.toString()]
    ]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('createBitweet', params);
    this.http.get(url).subscribe(data => {
      alert('Message soumis');
      this.bitweetService.getAllBitweetsFromChannel(bitweet.idChannel);
    });
  }
}
