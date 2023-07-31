import express, { Router, response } from "express";
import { controllerCatalogo } from "../controllers/controllers";

const catalogo = new controllerCatalogo;
const router: Router = express.Router();

router.post('/')
router.get('/')
router.get('/novo-post', catalogo.addAnewDocument2)
router.delete('/:id/delete', catalogo.deleteNewDocument)
// router.get('/novo-anuncio', (request, response) => { return response.send('Hello World!'); });
router.post('/novo-anuncio', catalogo.addAnewDocument)
router.put('/:id/edit')

export { router }