import {Request, Response} from "express";

import {firestore} from "../firebase";

//import { addDoc, collection, doc, getDoc, limit, onSnapshot, orderBy, query, where} from 'firebase/firestore'
const ff = require('firebase/firestore');

export class controllerCatalogo {

    // ESSE CRIA COM ID


    async addAnewDocument(req: Request, res: Response){
        const idCatalogo = ff.collection(firestore, 'Catalogo');
        try{
            const newDoc = await ff.addDoc(idCatalogo, {
                ano: req.params.ano,
                descricao: req.params.descricao,
                imagem:  req.params.imagem,
                km: req.params.km,
                marca: req.params.marca,
                modelo: req.params.modelo,
                preco: req.params.preco
            });
            res.send(console.log("Deu certo!"))
        }
        catch(error){
            res.send(console.log("Deu erro +", error));
        }
        
    }


    // LENDO O DOCUMENTO

    async  readASingleDocument(req: Request, res: Response){
        const Catalogo = ff.doc(firestore, 'Catalogo/${req.id}');
        const mySnapshot = await ff.getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO

    listenToADocument() {
        const Catalogo = ff.doc(firestore, 'Catalogo/2');
        ff.onSnapshot(Catalogo, (docSnapshot : any) => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                console.log('Esse documento é ${JSON.stringify(docData)}');
            }
        })
    }

    // LENDO VARIOS DOCUMENTOS DE UMA VEZ

    async queryForDocuments(req: Request, res: Response){
        const variosAnuncios = ff.query(
            ff.collection(firestore, 'Catalogo'),
            ff.where('modelo', '==', 'F8'),
            ff.orderBy('preco'),
            ff.limit(10),
        );

        
        ff.onSnapshot(variosAnuncios, (querySnapshot : any) =>{
            querySnapshot.forEach((snap : any) =>{
                console.log('Documento ${snap.id} contem ${JSON.stringify(snap.data())}');
            });
        });
        res.json(variosAnuncios);
    }



}


export class controllerUsuarios {

    // ESSE CRIA COM ID


    async addAnewDocument(req: Request, res: Response){
        const idUsuario = ff.collection(firestore, 'usuarios');
        try{
            const newDoc = await ff.addDoc(idUsuario, {
                nome: req.params.nome,
                sobrenome: req.params.sobrenome,
                email: req.params.email
            });
            res.send(console.log("Deu certo!"))
        }
        catch(error){
            res.send(console.log("Deu erro +", error));
        }
        
    }


    // LENDO O DOCUMENTO

    async  readASingleDocument(){
        const Catalogo = ff.doc(firestore, 'Catalogo/2');
        const mySnapshot = await ff.getDoc(Catalogo)
        if (mySnapshot.exists()) {
            const docData = mySnapshot.data();
            console.log('Dados do documento ${JSON.stringify(docData)}');
        }
    }

    // VENDO O ESTADO ATUAL DO DOCUMENTO

    listenToADocument() {
        const Catalogo = ff.doc(firestore, 'Catalogo/2');
        ff.onSnapshot(Catalogo, (docSnapshot : any) => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data();
                console.log('Esse documento é ${JSON.stringify(docData)}');
            }
        })
    }

    // LENDO VARIOS DOCUMENTOS DE UMA VEZ

    async queryForDocuments() {
        const variosAnuncios = ff.query(
            ff.collection(firestore, 'Catalogo'),
            ff.where('modelo', '==', 'F8'),
            ff.orderBy('preco'),
            ff.limit(10),
        );

        
        ff.onSnapshot(variosAnuncios, (querySnapshot : any) =>{
        querySnapshot.forEach((snap : any) =>{
            console.log('Documento ${snap.id} contem ${JSON.stringify(snap.data())}');
        });
    });
    }



}