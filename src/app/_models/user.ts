import {Bitweet} from './bitweet';

export class User {
    private _id: number;
    private _username: string;
    private _password: string;
    private _mail: string;
    private _nbFollowers: number;
    private _nbFollowing: number;
    private _bitweets: Bitweet[];

    constructor(id, username, password, mail, nbFollowers, nbFollowing, bitweets) {
      this._id = id;
      this._username = username;
      this._password = password;
      this._mail = mail;
      this._nbFollowers = nbFollowers;
      this._nbFollowing = nbFollowing;
      this._bitweets = bitweets;
    }

    get id(): number {
      return this._id;
    }
    set id(newId: number) {
      this._id = newId;
    }

    get username(): string {
      return this._username;
    }
    set username(newUsername: string) {
      this._username = newUsername;
    }

    get password(): string {
      return this._password;
    }
    set password(newPassword: string) {
      this._password = newPassword;
    }

    get mail(): string {
      return this._mail;
    }
    set mail(newMail: string) {
      this._mail = newMail;
    }

    get nbFollowers(): number {
      return this._nbFollowers;
    }
    set nbFollowers(newNbFollowers: number) {
      this._nbFollowers = newNbFollowers;
    }

    get nbFollowing(): number {
      return this._nbFollowing;
    }
    set nbFollowing(newNbFollowing: number) {
      this._nbFollowing = newNbFollowing;
    }

    get bitweets(): Bitweet[] {
      return this._bitweets;
    }
    set bitweets(newBitweets: Bitweet[]) {
      this._bitweets = newBitweets;
    }
}
