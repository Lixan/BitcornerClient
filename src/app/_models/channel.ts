import {Bitweet} from './bitweet';

export class Channel {
    private _id: number;
    private _title: string;
    private _bitweets: Bitweet[];

    constructor(id, title, bitweets) {
      this._id = id;
      this._title = title;
      this._bitweets = bitweets;
    }

    get id(): number {
      return this._id;
    }
    set id(newId: number) {
      this._id = newId;
    }

    get title(): string {
      return this._title;
    }
    set title(newTitle: string) {
      this._title = newTitle;
    }

    get bitweets(): Bitweet[] {
      return this._bitweets;
    }
    set bitweets(newBitweets: Bitweet[]) {
      this._bitweets = newBitweets;
    }
}
