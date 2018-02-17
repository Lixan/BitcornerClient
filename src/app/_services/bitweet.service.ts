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

  public getBitweets(): Observable<Bitweet[]>  {
    const url = this.serviceHelper.createServiceUrl('getBitweets');
    return this.http.get<Bitweet[]>(url);
  }

  // getBitweet(id: number): Observable<Bitweet>  {
  //  return this.http.get<Bitweet>(SERVICE_URL + '?action=getBitweets');
  // }

  public getBitweetsFromChannel(channelId: number) {
    const params = new Map<string, string>([['id', channelId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithParameters('getBitweetsFromChannel', params);
    return this.http.get<Bitweet[]>(url);
  }

}
