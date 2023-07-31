import { Request, Response } from "express";

import { db } from "../firebase";
import { addDoc, collection, doc, getDoc, limit, onSnapshot, orderBy, query, where, deleteDoc } from 'firebase/firestore'

// const ff = require('firebase/firestore');
//const db = getFirestore();

export class controllerCatalogo {

    // ESSE CRIA COM ID

    async addAnewDocument(req: Request, res: Response) {
        const idCatalogo = collection(db, "Catalogo");
        try {
            const ano = parseInt(req.body.ano)
            const km = parseInt(req.body.km)
            const preco = parseFloat(req.body.preco)
            const newDoc = await addDoc(idCatalogo, {
                ano: ano,
                descricao: req.body.descricao,
                imagem: req.body.imagem,
                km: km,
                marca: req.body.marca,
                modelo: req.body.modelo,
                preco: preco
            });
            res.send(console.log("Deu certo!"))
        }
        catch (error) {
            console.log(req.body)
            res.send(console.log("Deu erro +", error));
        }
    }

    async addAnewDocument2(req: Request, res: Response) {
        const idCatalogo = collection(db, 'Catalogo');
        try {
            const newDoc = await addDoc(idCatalogo, {
                ano: 2000,
                descricao: "req.params.descricao",
                imagem: "req.params.imagem",
                km: 1000,
                marca: "req.params.marca",
                modelo: "req.params.modelo",
                preco: 2000
            });
            res.send(console.log("Deu certo!"))
        }
        catch (error) {
            res.send(console.log("Deu erro +", error));
        }

    }


    // LENDO O DOCUMENTO
    async readASingleDocument(req: Request, res: Response) {
        const Catalogo = doc(db, 'Catalogo/${req.id}');
        const mySnapshot = await getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO
    listenToADocument() {
        const Catalogo = doc(db, 'Catalogo/2');
        onSnapshot(Catalogo, (docSnapshot: any) => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                console.log('Esse documento é ${JSON.stringify(docData)}');
            }
        })
    }

    // LENDO VARIOS DOCUMENTOS DE UMA VEZ
    async queryForDocuments(req: Request, res: Response) {
        const variosAnuncios = query(
            collection(db, 'Catalogo'),
            where('modelo', '==', 'F8'),
            orderBy('preco'),
            limit(10),
        );


        onSnapshot(variosAnuncios, (querySnapshot: any) => {
            querySnapshot.forEach((snap: any) => {
                console.log('Documento ${snap.id} contem ${JSON.stringify(snap.data())}');
            });
        });
        res.json(variosAnuncios);
    }

    async  deleteNewDocument(req: Request, res: Response) {
        try {
            // Get the ID of the document to be deleted from the request body
            const docIdToDelete = req.params.docId;
    
            // If the document ID is not provided in the request, respond with an error
            if (!docIdToDelete) {
            return res.status(400).send('Document ID not provided.');
            }
    
            // Reference to the document to be deleted
            const docRefToDelete = doc(db, 'Catalogo', docIdToDelete);
    
            // Delete the document
            await deleteDoc(docRefToDelete);
    
            // Respond with a success message
            res.send('Document deleted successfully.');
        } catch (error) {
            console.error('Error deleting document:', error);
            res.status(500).send('Error deleting document.');
        }
        }
    
    }





export class controllerUsuarios {

    // ESSE CRIA COM ID
    async addAnewDocument(req: Request, res: Response) {
        const idUsuario = collection(db, 'usuarios');
        try {
            const newDoc = await addDoc(idUsuario, {
                nome: req.params.nome,
                sobrenome: req.params.sobrenome,
                email: req.params.email
            });
            res.send(console.log("Deu certo!"))
        }
        catch (error) {
            res.send(console.log("Deu erro +", error));
        }
    }


    // LENDO O DOCUMENTO
    async readASingleDocument() {
        const Catalogo = doc(db, 'Catalogo/2');
        const mySnapshot = await getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO
    listenToADocument() {
        const Catalogo = doc(db, 'Catalogo/2');
        onSnapshot(Catalogo, (docSnapshot: any) => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                console.log('Esse documento é ${JSON.stringify(docData)}');
            }
        })
    }

    // LENDO VARIOS DOCUMENTOS DE UMA VEZ
    async queryForDocuments() {
        const variosAnuncios = query(
            collection(db, 'Catalogo'),
            where('modelo', '==', 'F8'),
            orderBy('preco'),
            limit(10),
        );


        onSnapshot(variosAnuncios, (querySnapshot: any) => {
            querySnapshot.forEach((snap: any) => {
                console.log('Documento ${snap.id} contem ${JSON.stringify(snap.data())}');
            });
        });
    }
}