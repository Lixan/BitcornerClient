import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Comment} from '../_models';
import {HttpClient} from '@angular/common/http';
import {ServiceHelper} from '../_helpers';
import {BitweetService} from './bitweet.service';

@Injectable()
export class CommentService {
  // ---------------------------------------------------------------------- ATTRIBUTES
  private serviceHelper: ServiceHelper;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor (private http: HttpClient, private bitweetService: BitweetService) {
    this.serviceHelper = new ServiceHelper();
  }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public createComment(comment: Comment): void {
    const params = new Map<string, string>([
      ['id', comment.id.toString()],
      ['message', comment.message],
      ['nbVotes', '0'],
      ['bitweetId', comment.bitweetId.toString()],
      ['userId', comment.userId.toString()]
    ]);
    const url = this.serviceHelper.createServiceUrlWithMapParameter('createComment', params);
    this.http.get(url).subscribe(data => {
      alert('Commentaire soumis');

      const channelJSON = localStorage.getItem('selectedChannel');
      if (channelJSON) {
        const channel = JSON.parse(channelJSON);
        this.bitweetService.getAllBitweetsFromChannel(channel.id); // Update view
      }

    });
  }
}
