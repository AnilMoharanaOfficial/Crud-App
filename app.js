import express from "express";
import courseRote from "./routes/courseRoute.js";

const app = express();
// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/course", courseRote);

app.use("/", (req, res) => {
  res.send("Server is Running........");
});

export default app;
