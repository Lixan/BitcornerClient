import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Channel} from '../_models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChannelService {
  constructor (private http: HttpClient) {}

  getChannels(): Observable<Channel[]>  {
    return this.http.get<Channel[]>('http://localhost/bitcorner/bitCorner/Server/index.php?action=getChannels');
  }

}
