import mysql from "mysql2/promise";

export class FindLastGamesQueryModel {
  constructor(
    private _gameId: number,
    private _darkMoveCount: number,
    private _lightMoveCount: number,
    private _winnerDisc: number,
    private _startedAt: Date,
    private _endAt: Date
  ) {}

  get gameId(): number {
    return this._gameId;
  }

  get darkMoveCount(): number {
    return this._darkMoveCount;
  }

  get lightMoveCount(): number {
    return this._lightMoveCount;
  }

  get winnerDisc(): number {
    return this._winnerDisc;
  }

  get startedAt(): Date {
    return this._startedAt;
  }

  get endAt(): Date {
    return this._endAt;
  }
}

export interface FindLastGamesQueryService {
  query(
    conn: mysql.Connection,
    limit: number
  ): Promise<FindLastGamesQueryModel[]>;
}
