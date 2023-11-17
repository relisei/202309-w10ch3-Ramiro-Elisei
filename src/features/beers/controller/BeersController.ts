import { type Request, type Response } from "express";
import { type BeersRepository } from "../repository/types.js";

class BeerController {
  constructor(private readonly beersRepository: BeersRepository) {}

  public getBeers = async (_req: Request, res: Response): Promise<void> => {
    const beers = await this.beersRepository.getBeers();

    res.status(200).json({ beers });
  };

  getBeersById = async (req: Request<{ beerId: string }>, res: Response) => {
    try {
      const { beerId } = req.params;

      const currentBeer = await this.beersRepository.getBeersById(beerId);
      res.status(200).json({ currentBeer });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ error: "The searched id was not found" });
    }
  };
}

export default BeerController;
