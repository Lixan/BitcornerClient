import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Bitweet} from '../_models';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BitweetService {
  constructor (private http: HttpClient) {}

  getBitweets(): Observable<Bitweet[]>  {
    return this.http.get<Bitweet[]>('http://localhost/bitcorner/bitCorner/Server/index.php?action=getBitweets');
  }

  getBitweet(id: number): Observable<Bitweet>  {
    id = 649;
    return this.http.get<Bitweet>('http://localhost/bitcorner/bitCorner/Server/index.php?action=getBitweet&params={\"id\":'+id+'}');
  }

  getBitweetsFromUser(userId: number): Observable<Bitweet[]>  {
    userId = 644;
    return this.http.get<Bitweet[]>('http://localhost/bitcorner/bitCorner/Server/index.php?action=getBitweetsFromUser&params={\"idUser\":'+userId+'}');
  }

  getBitweetsFromChannel(channelId: number): Observable<Bitweet[]>  {
    channelId = 647;
    return this.http.get<Bitweet[]>('http://localhost/bitcorner/bitCorner/Server/index.php?action=getBitweetsFromChannel&params={\"idChannel\":'+channelId+'}');
  }

}
