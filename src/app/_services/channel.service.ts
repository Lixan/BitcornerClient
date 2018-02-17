import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Channel} from '../_models';
import {Observable} from 'rxjs/Observable';
import {ServiceHelper} from '../_helpers';

@Injectable()
export class ChannelService {
  private serviceHelper: ServiceHelper;

  public constructor (private http: HttpClient) {
    this.serviceHelper = new ServiceHelper();
  }

  public getAllChannels(): Observable<Channel[]>  {
    const url = this.serviceHelper.createServiceUrl('getChannels');
    return this.http.get<Channel[]>(url);
  }

  public getOneChannel(id: number): Observable<Channel[]> {
    const params = new Map<string, string>([['id', id.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithParameters('getChannel', params);
    return this.http.get<Channel[]>(url);
  }

}
