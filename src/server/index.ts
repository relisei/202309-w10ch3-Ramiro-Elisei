import morgan from "morgan";
import express from "express";
import { app } from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import beersRouter from "../features/beers/router/beersRouter.js";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);
app.use("/beers", beersRouter);
