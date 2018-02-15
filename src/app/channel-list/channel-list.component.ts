import { Component, OnInit } from '@angular/core';

import { ChannelService, BitweetService } from '../_services/index';
import {Channel, Bitweet} from '../_models';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  channels: Channel[];
  selectedChannel: Channel;

  selectedBitweets: Bitweet[];

  constructor(private channelService: ChannelService, private bitweetService: BitweetService) {}

  ngOnInit() {
    this.loadChannels();
  }

  onSelect(channel: Channel): void {
    this.selectedChannel = channel;
    this.loadBitweetsFromChannel(this.selectedChannel.id);
  }

  loadChannels() {
    this.channelService.getChannels().subscribe(
      data => { this.channels = data; },
      error => { console.log(error); });
  }

  loadBitweetsFromChannel(channelId: number) {
    this.bitweetService.getBitweetsFromChannel(channelId).subscribe(
      data => { this.selectedBitweets = data; },
      error => { console.log(error); });
  }
}
