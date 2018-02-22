import { Component, OnInit, Input } from '@angular/core';

import { BitweetService } from '../_services/index';

import {Bitweet} from '../_models';

@Component({
  selector: 'app-bitweet-list',
  templateUrl: './bitweet-list.component.html',
  styleUrls: ['./bitweet-list.component.css']
})
export class BitweetListComponent implements OnInit {
  // ---------------------------------------------------------------------- ATTRIBUTES
  @Input() bitweets: Bitweet[];

  // ---------------------------------------------------------------------- CONSTRUCTOR
  constructor(private bitweetService: BitweetService) { }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  ngOnInit() {
    this.bitweetService.bitweetsObservable.subscribe(bitweets => { this.bitweets = bitweets; }); // Subscribe to data
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
