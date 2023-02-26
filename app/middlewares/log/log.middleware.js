// ----------------------------------------------
// log.middleware.js
// ----------------------------------------------
// Log all requests in file and print them in console.
// This log, contains method, path and datetime.

import { fileConfig } from "$config/index.js";

import chalk from "chalk";
import fs from "fs";

const colorize = (content, method) => {
  // ----------------------------------------------
  // colorize()
  // ----------------------------------------------
  // Use colors based on method.
  // Here is not completed yet but what we think is something like this:
  // Post: Yellow.
  // Get: Green.
  // Delete: Red.
  // Update: Blue.

  switch (method) {
  }
};

const log = async (req, res, next) => {
  // ----------------------------------------------
  // log()
  // ----------------------------------------------
  // In this method, we get method and path from request.
  // Then create the datetime.
  // Then create a contect that is concat of items below:
  // When happened | The method and where requested.

  const { method, path } = req;

  const when = new Date().toLocaleString("Us-fa");
  const content = `${when} | ${method} ${path}`;

  const filePath = fileConfig.filePath;
  const fileName = fileConfig.fileName;
  const fileContent = `${content}\n`;

  console.log(chalk.blue(content));

  try {
    fs.appendFileSync(filePath + fileName, fileContent);
  } catch (error) {
    console.log(chalk.red(error));
  }

  next();
};

export default log;
