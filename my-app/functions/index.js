const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51JZWkYSJDgFE9F4pJSrdWYcz3McJAMS8Q6SJCkBCXQ9EuZd9Kgo6Sk5qSgt6WyD1UcZvYkfE90hAdkVdAgCfWDxQ00ErIsMj1g"
);

// API

// app config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/velaanmaiam/us-central1/api
