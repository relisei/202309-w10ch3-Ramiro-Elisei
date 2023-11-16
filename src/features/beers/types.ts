import { type Types } from "mongoose";

export interface BeerStructure {
  beerType: string;
  ibu: number;
  origin: string;
  alcoholPercentage: number;
}

export interface BeerIdData extends BeerStructure {
  _id: Types.ObjectId;
}
