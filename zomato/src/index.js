const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");
const config = require('./config/config');

/* -------------------------- express using server -------------------------- */
const app = express();

/* ------------------------ allow form data from body ----------------------- */
app.use(bodyParser.urlencoded({ extended: false }));

/* ------------------------ allow json data from body ----------------------- */
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,`./public`)));

/* ---------------------- Routes Namespace upload files --------------------- */
app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not Found!"));
});

/* --------------------------- Database connection -------------------------- */
connectDB();

/* ------------------------ create server using http ------------------------ */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listening");
});
