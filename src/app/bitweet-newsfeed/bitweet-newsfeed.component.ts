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

  loadBitweets() {
    this.bitweetService.getBitweets().subscribe(
      data => { this.bitweets = data; },
      error => { console.log(error); });
  }

}
