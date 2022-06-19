export namespace Games {
  export class getAll {
    constructor(public ordering: string) {
    }
    static readonly type = '[Game] setAllGames';
  }

  export class getDetailById {
    static readonly type = '[Game] setGameDetails';
    constructor(public id: string) {
    }
  }

  export class getQueried {
    static readonly type = '[Game] getQueriedGame';
    constructor(public query: string) {
    }
  }
}
