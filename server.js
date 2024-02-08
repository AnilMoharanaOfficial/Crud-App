import app from "./app.js";
import connectToDb from "./config/database.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3536;

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`SERVER IS RUNNING AT localhost:${PORT}`);
});
