import express from "express";
import morgan from "morgan";
import cors from 'cors'
import dotenv from 'dotenv'
import doorsRoutes from './src/routers/doors.routes.js'
import usersRoutes from './src/routers/users.routes.js'

dotenv.config()

const app = express();
//Settings
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//Routes
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

app.use("/api/doors", doorsRoutes);
app.use("/api/users", usersRoutes);

export default app;