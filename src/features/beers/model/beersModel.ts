import { Schema, model } from "mongoose";
import { type BeerStructure } from "../types";

const beerSchema = new Schema<BeerStructure>({
  beerType: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  alcoholPercentage: {
    type: Number,
    required: true,
  },
  ibu: {
    type: Number,
    required: true,
  },
});

const BeerModel = model("beer", beerSchema, "beers");

export default BeerModel;
