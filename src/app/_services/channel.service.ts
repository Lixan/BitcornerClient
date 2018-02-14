import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Channel} from '../_models';
import {Observable} from 'rxjs/Observable';
import {SERVICE_URL} from '../_config/index';

@Injectable()
export class ChannelService {
  constructor (private http: HttpClient) {}

  getAllChannels(): Observable<Channel[]>  {
    return this.http.get<Channel[]>(SERVICE_URL + '?action=getChannels');
  }

  getOneChannel(id: number): Observable<Channel[]>  {
    const obj = { id : 390 };
    const params = JSON.stringify(obj);
    return this.http.get<Channel[]>(SERVICE_URL + '?action=getChannel&params=' + params);
  }

}
