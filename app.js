console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

//MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code
// express ga kirib kelayotgan kodlar yoziladi
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code


module.exports = app;