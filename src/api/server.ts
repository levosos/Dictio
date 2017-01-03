import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import * as express from "express";
import { join } from "path";

let port = process.env.PORT || 8080;
let path = join(__dirname, "../app/app");

let app = createExpressServer({
  controllers: [__dirname + "/controllers/**/*.js"],
  routePrefix: "/rest",
});

app.use(express.static(path));

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, function () {
  console.log("Dictio is running [port " + port + "] under '" + path + "'");
});