import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelService } from './_services/channel.service';
import { BitweetNewsfeedComponent } from './bitweet-newsfeed/bitweet-newsfeed.component';
import { BitweetService } from './_services/bitweet.service';
import { BitweetCreationComponent } from './bitweet-creation/bitweet-creation.component';
import { BitweetCommentCreationComponent } from './bitweet-comment-creation/bitweet-comment-creation.component';
import {CommentService} from './_services/comment.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BitweetListComponent } from './bitweet-list/bitweet-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      ChannelListComponent,
      BitweetNewsfeedComponent,
      BitweetCreationComponent,
      BitweetCommentCreationComponent,
      UserDetailComponent,
      BitweetListComponent,
      NavigationBarComponent
    ],
    providers: [
      AuthGuard,
      AuthenticationService,
      UserService,
      ChannelService,
      BitweetService,
      CommentService,

      // providers used to create fake backend
      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
