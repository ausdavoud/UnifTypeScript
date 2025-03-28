import "dotenv/config";
import express from "express";
import { testAsyncAnalyze } from "./testAnalyze";
import { testPushMessage } from "./pushToDB";
// import { testDownloadStoreFile } from "./downloadStoreFile";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("<h1>App is running!</h1>");
});

app.get("/testpush", (req, res) => {
  testPushMessage().then(() => res.send("ok"));
});

app.get("/testasyncanalyze", async (req, res) => {
  await testAsyncAnalyze();
  res.send("ok");
});

// app.get("/testUploadFile", async (req, res) => {
//     await testDownloadStoreFile();
//     res.send("ok");
// });

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`);
});
