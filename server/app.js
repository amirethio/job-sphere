import express from "express";
import authRoute from "./routes/auth.routes.js";
import JobsRoute from "./routes/jobs.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import cors from 'cors'


dotenv.config();
const PORT = 4001;
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({
    status: "working perfect",
  });
});


app.use("/auth", authRoute);
app.use("/jobs", JobsRoute);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
  });
});
