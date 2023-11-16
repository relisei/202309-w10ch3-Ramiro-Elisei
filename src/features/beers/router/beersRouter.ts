import { Router } from "express";
import BeerController from "../controller/BeersController.js";
import BeersMongooseRepository from "../repository/BeersMongooseRepository.js";

const beersRouter = Router();

const beersRepository = new BeersMongooseRepository();
const BeersController = new BeerController(beersRepository);

beersRouter.get("/", BeersController.getBeers);

export default beersRouter;
