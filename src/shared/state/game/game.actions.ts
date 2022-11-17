export namespace Games {
  export class getAll {
    constructor(public query?: string) {
    }
    static readonly type = '[Game] getAllGames';
  }

  export class getDetailById {
    static readonly type = '[Game] getGameDetails';
    constructor(public id: string) {
    }
  }
}
