import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../_models';
import {CommentService} from '../_services/comment.service';

@Component({
  selector: 'app-bitweet-comment-creation',
  templateUrl: './bitweet-comment-creation.component.html',
  styleUrls: ['./bitweet-comment-creation.component.css']
})
export class BitweetCommentCreationComponent implements OnInit {

  // ---------------------------------------------------------------------- ATTRIBUTES
  public comment: Comment;
  @Input() bitweetId: number;

  // ---------------------------------------------------------------------- CONSTRUCTOR
  public constructor(private commentService: CommentService) { }

  // ---------------------------------------------------------------------- PUBLIC METHODS
  public ngOnInit() {
    this.comment = new Comment(-1, '', 0,  -1, -1);
  }

  public onSubmit(): void {
    const userJSON = localStorage.getItem('currentUser');
    if (userJSON) {
      const user = JSON.parse(userJSON);

      this.comment.userId = user.id;
      this.comment.bitweetId = this.bitweetId;

      this.commentService.createComment(this.comment);
    }
  }
}
