import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../_services/index';
import { User } from '../_models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.usersObservable.subscribe(user => { this.user = user; });
    const id = +this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  public getUser(id: number) {
    this.userService.getUser(id);
  }
}
