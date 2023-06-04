import express from "express";
import { StartNewGameUseCase } from "../application/useCase/startNewGameUseCase";
import { GameMySQLRepository } from "../infrastructure/repository/game/gameMySQLRepository";
import { TurnMySQLRepository } from "../infrastructure/repository/turn/turnMySQLRepository";
import { FindLastGamesUseCase } from "../application/useCase/findLastGamesUseCase";
import { FindLastGameMySQLQueryService } from "../infrastructure/query/findLastGamesMySQLQueryService";

export const gameRouter = express.Router();

const startNewGameUseCase = new StartNewGameUseCase(
  new GameMySQLRepository(),
  new TurnMySQLRepository()
);

const findLastGamesUseCase = new FindLastGamesUseCase(
  new FindLastGameMySQLQueryService()
);

interface GetGamesResponseBody {
  games: {
    id: number;
    darkMoveCount: number;
    lightMoveCount: number;
    winnerDisc: number;
    startedAt: Date;
    endAt: Date;
  }[];
}

gameRouter.get(
  "/api/games",
  async (req, res: express.Response<GetGamesResponseBody>) => {
    const output = await findLastGamesUseCase.run();

    const responseBodyGames = output.map((o) => {
      return {
        id: o.gameId,
        darkMoveCount: o.darkMoveCount,
        lightMoveCount: o.lightMoveCount,
        winnerDisc: o.winnerDisc,
        startedAt: o.startedAt,
        endAt: o.endAt,
      };
    });

    const responseBody: GetGamesResponseBody = {
      games: responseBodyGames,
    };

    res.json(responseBody);
  }
);

gameRouter.post("/api/games", async (req, res) => {
  await startNewGameUseCase.run();

  res.status(201).end();
});
