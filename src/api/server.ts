import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import * as express from "express";

console.log("Dictio running under '" + __dirname + "/../app/app'");

let app = createExpressServer({
  controllers: [__dirname + "/controllers/**/*.js"],
  routePrefix: "/api",
});

app.use(express.static('../app/app'));

app.listen(3000, function () {
  console.log("Dictio is listening on port 3000!");
});