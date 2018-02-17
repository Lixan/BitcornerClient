import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Bitweet} from '../_models';
import {Observable} from 'rxjs/Observable';
import {ServiceHelper} from '../_helpers';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class BitweetService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  private serviceHelper: ServiceHelper;

  private bitweetsSource = new BehaviorSubject<Bitweet[]>([]); // Used to store and notify data to the view component
  public bitweetsObservable = this.bitweetsSource.asObservable(); // Read by the view component

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor (private http: HttpClient) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public getAllBitweets(): void {
    const url = this.serviceHelper.createServiceUrl('getBitweets');
    this.http.get<Bitweet[]>(url).subscribe(data => { this.bitweetsSource.next(data); });
  }

  public getAllBitweetsFromUser(userId: number): void  {
    const params = new Map<string, string>([['idUser', userId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('getBitweetsFromUser', params);
    this.http.get<Bitweet[]>(url).subscribe(data => { this.bitweetsSource.next(data); });
  }

  public getAllBitweetsFromChannel(channelId: number): void {
    const params = new Map<string, string>([['idChannel', channelId.toString()]]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('getBitweetsFromChannel', params);
    this.http.get<Bitweet[]>(url).subscribe(data => { this.bitweetsSource.next(data); });
  }
}
