/*
import {Component, OnInit} from '@angular/core';

import { ChannelService } from '../_services/index';
import {Channel} from '../_models';
import {BitweetNewsfeedComponent} from '../bitweet-newsfeed/bitweet-newsfeed.component';
*/
import { Component, OnInit } from '@angular/core';

import { ChannelService, BitweetService } from '../_services/index';
import {Channel, Bitweet} from '../_models';


@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css'],
  // providers: [BitweetNewsfeedComponent]
})
export class ChannelListComponent implements OnInit {

  private channels: Channel[];
  private selectedChannel: Channel;
  private selectedBitweets: Bitweet[];

  public constructor(private channelService: ChannelService, private bitweetService: BitweetService) {}
  // public constructor(private channelService: ChannelService, private bitweetNewsFeed: BitweetNewsfeedComponent) {}

  public ngOnInit() {
    this.loadAllChannels();
  }

  public onSelect(channel: Channel): void {
    this.selectedChannel = channel;
    // this.loadBitweetsFromChannel(this.selectedChannel.id);
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

  /*public updateBitweets(channelId: number) {
    this.bitweetNewsFeed.loadBitweetsFromChannel(channelId);
  }*/

  public loadBitweetsFromChannel(channelId: number) {
    this.bitweetService.getBitweetsFromChannel(channelId).subscribe(
      data => { this.selectedBitweets = data; },
      error => { console.log(error); });
  }

}
