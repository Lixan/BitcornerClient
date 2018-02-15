import { Component, OnInit, Input } from '@angular/core';

import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-newsfeed',
  templateUrl: './bitweet-newsfeed.component.html',
  styleUrls: ['./bitweet-newsfeed.component.css']
})

export class BitweetNewsfeedComponent implements OnInit {
  @Input() bitweets: Bitweet[];

  constructor() {}

  ngOnInit() {}

}
