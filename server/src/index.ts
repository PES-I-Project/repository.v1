import express, { Express, response } from "express";
import { router } from "./routes/router";
const app: Express = express();
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.get('/users', (request, response) => { return response.send('Hello World!'); });
app.get('/novo-anuncio', (request, response) => { });
app.use('/api', router);
app.get('/', (request, response) => {
    return response.send('HOME');
});




app.listen(port, () => {
    console.log("Server On  http://localhost:${port}")
});

