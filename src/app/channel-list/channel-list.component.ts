
import {Component, OnInit} from '@angular/core';

import {BitweetService, ChannelService} from '../_services/index';
import {Channel} from '../_models';
import {BitweetNewsfeedComponent} from '../bitweet-newsfeed/bitweet-newsfeed.component';
/*
import { Component, OnInit } from '@angular/core';

import { ChannelService, BitweetService } from '../_services/index';
import {Channel, Bitweet} from '../_models';
*/

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  // ---------------------------------------------------------------------- ATTRIBUTES
  public channels: Channel[];
  public selectedChannel: Channel;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private channelService: ChannelService, private bitweetService: BitweetService) {}

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.channelService.channelsObservable.subscribe(channels => { this.channels = channels; }); // Subscribe to data
    this.loadAllChannels();
  }

  public onSelectChannel(channel: Channel): void {
    this.selectedChannel = channel;
    this.bitweetService.getAllBitweetsFromChannel(this.selectedChannel.id); // Load bitweets
  }

  public loadAllChannels() {
    this.channelService.getAllChannels();
  }
}
