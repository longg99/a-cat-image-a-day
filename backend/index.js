// listen on port 8000
const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");
// read from .env file
require("dotenv").config({ path: "./.env" });

const app = express();

// listen to the changes
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// use cors
app.use(cors());
// use the built react app
app.use(express.static(path.join(__dirname, "./../build")));

app.get("/", (request, response, next) => {
  response.json("Hello world!");
});

app.get("/breeds", (request, response, next) => {
  axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/breeds",
    headers: {
      // the API key
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
    },
  })
    .then((res) => {
      // to json
      response.json(res.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get("/categories", (request, response, next) => {
  axios({
    method: "get",
    url: "https://api.thecatapi.com/v1/categories",
    headers: {
      // the API key
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
    },
  })
    .then((res) => {
      // to json
      response.json(res.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get("/breeds/:breedId", (request, response, next) => {
  const breedId = request.params.breedId;
  axios({
    method: "get",
    url: `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    headers: {
      // the API key
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
    },
  })
    .then((res) => {
      // to json
      response.json(res.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get("/categories/:categoryId", (request, response, next) => {
  const categoryId = request.params.categoryId;
  axios({
    method: "get",
    url: `https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}`,
    headers: {
      // the API key
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
    },
  })
    .then((res) => {
      // to json
      response.json(res.data);
    })
    .catch((err) => {
      next(err);
    });
});

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./../build/index.html"));
});
