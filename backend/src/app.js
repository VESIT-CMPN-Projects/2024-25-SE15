import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

//routes
import userRouter from "./routes/user.routes.js";
import skillRouter from "./routes/skill.routes.js";
import videoRouter from "./routes/video.routes.js";
import stepRouter from "./routes/step.routes.js";
import marketRouter from "./routes/market_opportunity.routes.js";

//routes declarations
app.use("/api/v1/users", userRouter);
app.use("/api/v1/skills", skillRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/steps", stepRouter);
app.use("/api/v1/market", marketRouter);

export { app };
