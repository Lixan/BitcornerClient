import { Component, OnInit, Input } from '@angular/core';

import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent implements OnInit {
  /*private bitweets: Bitweet[];

  public constructor(private bitweetService: BitweetService) {}

  public ngOnInit() {
    this.loadAllBitweets();
  }*/
  bitweets: Bitweet[];

  constructor() {}

  ngOnInit() {}

  /*public loadAllBitweets() {
    this.clearBitweets();
    this.bitweetService.getBitweets().subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

  public loadBitweetsFromChannel(channelId: number) {
    this.clearBitweets();
    this.bitweetService.getBitweetsFromChannel(channelId).subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

  private clearBitweets() {
    this.bitweets = [];
  }*/

}
