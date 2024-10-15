// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
import cors from "cors";
import express from "express";
import db from "./database/db.js";
import itemRouter from "./routes/user.router.js";
import adminRouter from "./routes/admin.router.js";
import userDatarouter from "./routes/user-data.router.js";
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error-middleware.js";
import slidesRouter from "./routes/slides.router.js";
import imageUploadRouter from "./routes/image.router.js";
import PagesRouter from "./routes/pages.router.js";
import sectionHeaderRouter from "./routes/section-header.router.js";
import queryRouter from "./routes/query.router.js";
import staticPagesRouter from "./routes/static-pages.router.js";
import tableRouter from "./routes/table.router.js";

dotenv.config();

const app = express();

// app.use(
//   cors({
//     origin:'https://webproreact.netlify.app',
//     // origin: 'http://localhost:5173',
//     credentials: true, // allow credentials (cookies)
//   })
// );

const allowedOrigins = [
  "https://webproreact.netlify.app",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the origin is in the allowed list
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow credentials (cookies)
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/items", itemRouter);
app.use("/user", userDatarouter);
app.use("/admin", adminRouter);
app.use("/slides", slidesRouter);
app.use("/image", imageUploadRouter);
app.use("/pages", PagesRouter);
app.use("/section/header", sectionHeaderRouter);
app.use("/query", queryRouter);
app.use("/static-pages",staticPagesRouter);
app.use('/table',tableRouter)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(errorMiddleware);
// Start server
const PORT = 5000;
app.listen(PORT, () => {
  // console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Server is running on Port:${PORT}`);
});
