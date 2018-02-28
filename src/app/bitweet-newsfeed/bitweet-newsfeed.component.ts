import { Component, OnInit, Input } from '@angular/core';

import { BitweetService } from '../_services/index';

import {Bitweet, Channel} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent implements OnInit {
  // ---------------------------------------------------------------------- ATTRIBUTES
  public bitweets: Bitweet[];
  public selectedChannel: Channel;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private bitweetService: BitweetService) {}

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.bitweetService.bitweetsObservable.subscribe(bitweets => {
      this.bitweets = bitweets;
      this.selectedChannel = JSON.parse(localStorage.getItem('selectedChannel'));
      }); // Subscribe to data
    this.loadAllBitweets();
  }

  public loadAllBitweets() {
    this.bitweetService.getAllBitweets();
  }

  public loadBitweetsFromChannel(channelId: number) {
    this.bitweetService.getAllBitweetsFromChannel(channelId);
  }

}
