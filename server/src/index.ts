import express, { Express, response } from "express";
import { router } from "./routes/router";
import dotenv from "dotenv";
import cors from "cors";
// import { controllerCatalogo } from "./controllers/controllers";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', router)

// const catalogo = new controllerCatalogo;
// // catalogo.deleteDocument("2")

app.listen(port, () => {
    console.log(`Server On http://localhost:${port}`)
});