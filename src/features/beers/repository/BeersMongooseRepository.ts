import BeerModel from "../model/beersModel.js";
import { type BeerStructure } from "../types";
import { type BeersRepository } from "./types";

class BeersMongooseRepository implements BeersRepository {
  public getBeers = async (): Promise<BeerStructure[]> => {
    const beers = await BeerModel.find();

    return beers;
  };

  public async getBeersById(beerId: string): Promise<BeerStructure> {
    const beerFromDataBase = await BeerModel.findById(beerId);

    if (!beerFromDataBase) {
      throw new Error("The beer was not found");
    }

    return beerFromDataBase;
  }
}

export default BeersMongooseRepository;
