export class Bitweet {
    private _id: number;
    private _message: string;
    private _nbVotes: number;
    private _comments: Comment[];
    private _idUser: number;
    private _idChannel: number;

    constructor(id, message, nbVotes, comments, idUser, idChannel) {
      this._id = id;
      this._message = message;
      this._nbVotes = nbVotes;
      this._comments = comments;
      this._idUser = idUser;
      this._idChannel = idChannel;
    }

    get id(): number {
      return this._id;
    }
    set id(newId: number) {
      this._id = newId;
    }

    get message(): string {
      return this._message;
    }
    set message(newMessage: string) {
      this._message = newMessage;
    }

    get nbVotes(): number {
      return this._nbVotes;
    }
    set nbVotes(newNbVotes: number) {
      this._nbVotes = newNbVotes;
    }

    get comments(): Comment[] {
      return this._comments;
    }
    set comments(newComments: Comment[]) {
      this._comments = newComments;
    }

    get idUser(): number {
      return this._idUser;
    }
    set idUser(newIdUser: number) {
      this._idUser = newIdUser;
    }

    get idChannel(): number {
      return this._idChannel;
    }
    set idChannel(newIdChannel: number) {
      this._idChannel = newIdChannel;
    }
}
