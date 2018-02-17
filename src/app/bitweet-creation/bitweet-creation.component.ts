import { Component, OnInit } from '@angular/core';
import {Bitweet} from '../_models';
import {BitweetService, ChannelService, UserService} from '../_services';

@Component({
  selector: 'app-bitweet-creation',
  templateUrl: './bitweet-creation.component.html',
  styleUrls: ['./bitweet-creation.component.css']
})
export class BitweetCreationComponent implements OnInit {

  // ---------------------------------------------------------------------- ATTRIBUTES
  public bitweet: Bitweet;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(
    private channelService: ChannelService,
    private userService: UserService) { }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.bitweet = new Bitweet(-1, '', 0, [], -1, -1);
  }

  public onSubmit(): void {
    // Should be the right way but easier to test with local storage because data are kept after reloading of the page
    /*const channel = this.channelService.selectedChannel;
    const user = this.userService.currentUser;
    console.log(channel);
    if (!channel) {
      alert('Select a channel');
    }
    if (!user) {
      alert('User could not be identified try to reconnect');
    }

    if (channel && user) {
      console.log(channel);
      console.log(user);
    }*/

    const channelJSON = localStorage.getItem('selectedChannel');
    const userJSON = localStorage.getItem('currentUser');
    if (channelJSON && userJSON) {
      const channel = JSON.parse(channelJSON);
      const user = JSON.parse(userJSON);

      this.bitweet.idChannel = channel.id;
      this.bitweet.idUser = user.id;

      this.userService.createBitweet(this.bitweet);
    }
  }

}
