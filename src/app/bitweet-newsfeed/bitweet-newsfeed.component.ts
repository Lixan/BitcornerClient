import { Component, OnInit } from '@angular/core';

import { BitweetService } from '../_services/index';
import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent {
  constructor(private bitweetService: BitweetService) {}
  profile = {};
  bitweets: Bitweet[];
  bitweet: Bitweet;

  loadBitweets() {
    this.bitweetService.getBitweets().subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

  loadBitweet(id: number) {
    this.bitweetService.getBitweet(id).subscribe(
      data => { this.bitweet = data; },
      error => { console.log(error); });
  }

  loadBitweetsFromUser(userId: number) {
    this.bitweetService.getBitweetsFromUser(userId).subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

  loadBitweetsFromChannel(channelId: number) {
    this.bitweetService.getBitweetsFromChannel(channelId).subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

}
