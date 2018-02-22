import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BitweetService, UserService } from '../_services/index';
import { User, Bitweet } from '../_models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private user: User;
  private bitweets: Bitweet[];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private bitweetService: BitweetService) { }

  ngOnInit() {
    this.userService.usersObservable.subscribe(user => { this.user = user; });
    this.bitweetService.bitweetsObservable.subscribe(bitweets => { this.bitweets = bitweets; });

    const id = +this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  public getUser(id: number) {
    this.userService.getUser(id);
    this.bitweetService.getAllBitweetsFromUser(id);
  }
}
