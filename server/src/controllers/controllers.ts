import { Request, Response } from "express";

import { firestore } from "../firebase";
import { addDoc, collection, doc, getDoc, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'

// const ff = require('firebase/firestore');
//const db = getFirestore();

export class controllerCatalogo {

    // ESSE CRIA COM ID
    async addAnewDocument(req: Request, res: Response) {
        const idCatalogo = collection(firestore, 'Catalogo');
        try {
            const newDoc = await addDoc(idCatalogo, {
                ano: req.params.ano,
                descricao: req.params.descricao,
                imagem: req.params.imagem,
                km: req.params.km,
                marca: req.params.marca,
                modelo: req.params.modelo,
                preco: req.params.preco
            });
            res.send(console.log("Deu certo!"))
        }
        catch (error) {
            res.send(console.log("Deu erro +", error));
        }
    }

    async addAnewDocument2(req: Request, res: Response) {
        const idCatalogo = collection(firestore, 'Catalogo');
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
        const Catalogo = doc(firestore, 'Catalogo/${req.id}');
        const mySnapshot = await getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO
    listenToADocument() {
        const Catalogo = doc(firestore, 'Catalogo/2');
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
            collection(firestore, 'Catalogo'),
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
}


export class controllerUsuarios {

    // ESSE CRIA COM ID
    async addAnewDocument(req: Request, res: Response) {
        const idUsuario = collection(firestore, 'usuarios');
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
        const Catalogo = doc(firestore, 'Catalogo/2');
        const mySnapshot = await getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO
    listenToADocument() {
        const Catalogo = doc(firestore, 'Catalogo/2');
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
            collection(firestore, 'Catalogo'),
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