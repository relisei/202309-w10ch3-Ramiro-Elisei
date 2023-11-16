import BeerModel from "../model/beersModel.js";
import { type BeerStructure } from "../types";
import { type BeersRepository } from "./types";

class BeersMongooseRepository implements BeersRepository {
  public getBeers = async (): Promise<BeerStructure[]> => {
    const beers = await BeerModel.find();

    return beers;
  };
}

export default BeersMongooseRepository;
