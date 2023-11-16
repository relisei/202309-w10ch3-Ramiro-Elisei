import BeerModel from "../model/beersModel";
import { type BeerStructure } from "../types";
import { type BeersRepository } from "./types";

class BeersMongooseRepository implements BeersRepository {
  public async getBeers(): Promise<BeerStructure[]> {
    const beers = await BeerModel.find();

    return beers;
  }
}

export default BeersMongooseRepository;
