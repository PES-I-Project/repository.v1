import express, { Router } from "express";
import { controllerCatalogo } from "../controllers/controllers";

const catalogo = new controllerCatalogo;
const router: Router = express.Router();

router.post('/')
router.get('/')
router.get('/novo-post', catalogo.addAnewDocument2)
router.get('/novo-anuncio', catalogo.addAnewDocument)





export { router }