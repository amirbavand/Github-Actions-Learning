const express = require("express");
const mongoose = require("mongoose");
const application = require("./app");
console.log("this is application", application);

const start = async () => {
  try {
    await mongoose.connect("mongodb://mongo-db-auth:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to the database");
  } catch (error) {
    console.log("error accured");
    throw new Error("this is error");
  }
};

application.listen(3000, () => {
  console.log("listening on port 3000");
});

start();
