import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Bitweet, Channel} from '../_models';
import {Observable} from 'rxjs/Observable';
import {ServiceHelper} from '../_helpers';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ChannelService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  private serviceHelper: ServiceHelper;
  private channelsSource = new BehaviorSubject<Channel[]>([]); // Used to store and notify data to the view component
  public channelsObservable = this.channelsSource.asObservable(); // Read by the view component

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor (private http: HttpClient) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public getAllChannels(): void  {
    const url = this.serviceHelper.createServiceUrl('getChannels');
    this.http.get<Channel[]>(url).subscribe(data => { this.channelsSource.next(data); });
  }
}
