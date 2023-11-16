import "dotenv/config";
import express from "express";
import chalk from "chalk";

export const app = express();

app.disable("x-powered-by");

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(chalk.green(`Listening on http://localhost:${port}`));
  });
};
