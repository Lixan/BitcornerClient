﻿import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import {AuthenticationService, UserService} from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    // ---------------------------------------------------------------------- ATTRIBUTES
    public currentUsername: string;

    // ---------------------------------------------------------------------- CONSTRUCTOR
    public constructor(private userService: UserService) { }

    // ---------------------------------------------------------------------- PUBLIC METHODS
    public ngOnInit() {
      const userJSON = localStorage.getItem('currentUser');
      if (userJSON) {
        const user = JSON.parse(userJSON);
        this.currentUsername = user.username;
      }
    }

}
