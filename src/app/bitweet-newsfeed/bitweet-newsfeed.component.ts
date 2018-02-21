import { Component, OnInit, Input } from '@angular/core';

import { BitweetService } from '../_services/index';

import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent implements OnInit {
  // ---------------------------------------------------------------------- ATTRIBUTES
  public bitweets: Bitweet[];

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private bitweetService: BitweetService) {}

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.bitweetService.bitweetsObservable.subscribe(bitweets => { this.bitweets = bitweets; }); // Subscribe to data
    this.loadAllBitweets();
  }

  public loadAllBitweets() {
    this.bitweetService.getAllBitweets();
  }

  public loadBitweetsFromChannel(channelId: number) {
    this.bitweetService.getAllBitweetsFromChannel(channelId);
  }

  public upVote(bitweet: Bitweet) {
    this.bitweetService.upVote(bitweet.id);
    bitweet.nbVotes += 1;
  }

  public downVote(bitweet: Bitweet) {
    this.bitweetService.downVote(bitweet.id);
    bitweet.nbVotes -= 1;
  }

}
