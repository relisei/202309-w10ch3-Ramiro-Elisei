import chalk from "chalk";
import mongoose from "mongoose";

const connectToDataBase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log(chalk.green("Connected to DataBase"));
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToDataBase;
