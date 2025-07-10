import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/api/data", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=60"); // Cache API response for 1 minute
  res.json({ message: "Dynamic data" });
});

app.listen(3000, () => {
  console.log("Server is started"); 
});
