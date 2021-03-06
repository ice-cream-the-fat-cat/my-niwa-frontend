import cors from "cors";
import express, { Express } from "express";
import completedTaskRouter from "./routes/completedTask";
import flowersRouter from "./routes/flowers";
import flowerStoreRouter from "./routes/flowerStore";
import gardenCategoriesRouter from "./routes/gardenCategories";
import gardensRouter from "./routes/gardens";
import rulesRouter from "./routes/rules";
import usersRouter from "./routes/users";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/flowers", flowersRouter);
app.use("/api/v1/flowersStore", flowerStoreRouter);
app.use("/api/v1/gardens", gardensRouter);
app.use("/api/v1/gardenCategories", gardenCategoriesRouter);
app.use("/api/v1/rules", rulesRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/completedTasks", completedTaskRouter);

app.listen(3001, () => {
  console.log("Start on port http://localhost:3001");
});
