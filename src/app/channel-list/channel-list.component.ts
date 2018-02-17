import {Component, OnInit} from '@angular/core';

import { ChannelService } from '../_services/index';
import {Channel} from '../_models';
import {BitweetNewsfeedComponent} from '../bitweet-newsfeed/bitweet-newsfeed.component';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css'],
  providers: [BitweetNewsfeedComponent]
})
export class ChannelListComponent implements OnInit {
  private channels: Channel[];

  public constructor(private channelService: ChannelService, private bitweetNewsFeed: BitweetNewsfeedComponent) {}

  public ngOnInit() {
    this.loadAllChannels();
  }

  public loadAllChannels() {
    this.channelService.getAllChannels().subscribe(
      data => { this.channels = data; },
      error => { console.log(error); });
  }

  public loadOneChannel(channelId: number) {
    this.channelService.getOneChannel(channelId).subscribe(
      data => { this.channels = data; },
      error => { console.log(error); });
  }

  public updateBitweets(channelId: number) {
    this.bitweetNewsFeed.loadBitweetsFromChannel(channelId);
  }
}
