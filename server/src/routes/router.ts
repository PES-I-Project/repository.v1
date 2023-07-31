import express, { Router, response } from "express";
import { controllerCatalogo } from "../controllers/controllers";

const catalogo = new controllerCatalogo;
const router: Router = express.Router();

// router.get('/novo-anuncio', (request, response) => { return response.send('Hello World!'); });
// router.get('/novo-post', catalogo.addAnewDocument2)
router.post('/')
router.get('/')
router.get('/:id', catalogo.listenToADocument)
router.delete('/:id', catalogo.deleteNewDocument)
router.post('/novo-anuncio', catalogo.addAnewDocument)
router.put('/:id')
router.get('/:id', catalogo.deleteNewDocument)


export { router }