import { Component } from '@angular/core';

import { ChannelService } from '../_services/index';
import {Channel} from '../_models';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent {
  constructor(private channelService: ChannelService) {}
  profile = {};
  channels: Channel[];

  loadAllChannels() {
    this.channelService.getAllChannels().subscribe(
      data => { this.channels = data; },
      error => { console.log(error); });
  }

  loadBitweets(channelId: number) {
    this.channelService.getOneChannel(channelId).subscribe(
      data => { this.channels = data; },
      error => { console.log(error); });
  }

}
