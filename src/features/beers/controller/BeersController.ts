import { type Request, type Response } from "express";
import { type BeersRepository } from "../repository/types.js";

class BeerController {
  constructor(private readonly beersRepository: BeersRepository) {}

  getBeers = async (_req: Request, res: Response): Promise<void> => {
    const beers = await this.beersRepository.getBeers();

    res.status(200).json({ beers });
  };
}

export default BeerController;
