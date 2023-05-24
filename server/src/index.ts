import express, {Express} from "express";
import {router} from "./routes/router";
const app: Express = express();

app.use(express.json());
app.get('/users', (request, response) => {     return response.send('Hello World!');   });
app.use('/api', router);


console.log("Abriu!")


app.listen(5555, () =>{
    console.log("Server On")
});

