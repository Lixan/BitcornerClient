export class Comment {
    private _id: number;
    private _message: string;
    private _nbVotes: number;
    private _bitweetId: number;
    private _userId: number;
    private _username: string;

    constructor(id, message, nbVotes, bitweetId, userId, username) {
      this._id = id;
      this._message = message;
      this._nbVotes = nbVotes;
      this._bitweetId = bitweetId;
      this._userId = userId;
      this._username = username;
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

    get bitweetId(): number {
      return this._bitweetId;
    }
    set bitweetId(newBitweetId: number) {
      this._bitweetId = newBitweetId;
    }

    get userId(): number {
      return this._userId;
    }
    set userId(newUserId: number) {
      this._userId = newUserId;
    }

    get username(): string {
      return this._username;
    }
    set username(newUsername: string) {
      this._username = newUsername;
    }

}
