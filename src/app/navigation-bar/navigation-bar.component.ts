import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import {AuthenticationService, UserService} from '../_services/index';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  // ---------------------------------------------------------------------- ATTRIBUTES
  public currentUser: string;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private userService: UserService) { }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
