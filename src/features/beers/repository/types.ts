import { type BeerStructure } from "../types";

export interface BeersRepository {
  getBeers: () => Promise<BeerStructure[]>;
  getBeersById(beerId: string): Promise<BeerStructure>;
}
