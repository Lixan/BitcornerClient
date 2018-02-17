import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Bitweet} from '../_models';
import {Observable} from 'rxjs/Observable';
import {ServiceHelper} from '../_helpers';

@Injectable()
export class BitweetService {
  private serviceHelper: ServiceHelper;

  public constructor (private http: HttpClient) {
    this.serviceHelper = new ServiceHelper();
  }

  public getAllBitweets(): Observable<Bitweet[]>  {
    const url = this.serviceHelper.createServiceUrl('getBitweets');
    return this.http.get<Bitweet[]>(url);
  }

  public getOneBitweet(bitweetId: number): Observable<Bitweet>  {
    const params = new Map<string, string>([['id', bitweetId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithParameters('getBitweet', params);
    return this.http.get<Bitweet>(url);
  }

  public getBitweetsFromUser(userId: number): Observable<Bitweet>  {
    const params = new Map<string, string>([['id', userId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithParameters('getBitweet', params);
    return this.http.get<Bitweet>(url);
  }

  public getBitweetsFromChannel(channelId: number) {
    const params = new Map<string, string>([['id', channelId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithParameters('getBitweetsFromUser', params);
    return this.http.get<Bitweet[]>(url);
  }

}
