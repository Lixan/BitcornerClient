import { Component, OnInit } from '@angular/core';

import { BitweetService } from '../_services/index';
import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent implements OnInit {

  private bitweets: Bitweet[];

  public constructor(private bitweetService: BitweetService) {}

  public ngOnInit() {
    this.loadAllBitweets();
  }

  public loadAllBitweets() {
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
  }

}
