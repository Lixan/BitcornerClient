import { Component, OnInit } from '@angular/core';
import {Bitweet} from '../_models';
import {BitweetService} from '../_services';

@Component({
  selector: 'app-bitweet-creation',
  templateUrl: './bitweet-creation.component.html',
  styleUrls: ['./bitweet-creation.component.css']
})
export class BitweetCreationComponent implements OnInit {

  // ---------------------------------------------------------------------- ATTRIBUTES
  public bitweet: Bitweet;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private bitweetService: BitweetService) { }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.bitweet = new Bitweet(-1, '', 0, [], -1, -1);
  }

  public onSubmit(): void {
    const channelJSON = localStorage.getItem('selectedChannel');
    const userJSON = localStorage.getItem('currentUser');
    if (channelJSON && userJSON) {
      const channel = JSON.parse(channelJSON);
      const user = JSON.parse(userJSON);

      this.bitweet.idChannel = channel.id;
      this.bitweet.idUser = user.id;

      this.bitweetService.createBitweet(this.bitweet);
    }
  }

}
