import { type BeerStructure } from "../types";

export interface BeersRepository {
  getBeers: () => Promise<BeerStructure[]>;
}
