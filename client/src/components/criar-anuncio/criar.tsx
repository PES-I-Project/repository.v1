import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./criar.css"
import React from 'react';


function App() {
    const navigate = useNavigate();
    const [announcement, setannouncement] = useState({
        ano: '',
        descricao: '',
        imagem: '',
        km: '',
        marca: '',
        modelo: '',
        preco: ''
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        setannouncement({ ...announcement, [e.target.name]: e.target.value })
    }

    async function criarPost(event: React.FormEvent) {
        event.preventDefault()

        axios
            .post('http://localhost:5555/api/novo-anuncio', announcement)
            .then((res) => {
                setannouncement({
                    ano: '',
                    descricao: '',
                    imagem: '',
                    km: '',
                    marca: '',
                    modelo: '',
                    preco: ''
                });

                navigate('/');
            })
            .catch((err: Error) => {
                console.log(Error);
            });

        
    }

    return (

        <body>
            
        
        <header id="h-criar">
            <button className="btn_home">
                <img src="src/assets/logo_G3.png" alt="image"/>
            </button>
            <div>
                <input type="search" name="Pesquisar" id="search" placeholder="Pesquisar veículo"/>
            </div>
        </header>

        <main className="main_criar">
                    <form onSubmit={criarPost}>
                        <div className="infos-init">
                            <input type="text" className="iniciar" placeholder="Marca" name="marca" value={announcement.marca} onChange={onChange} required={true} autoComplete="off" />
                            <input type="text" className="iniciar" placeholder="Modelo" name="modelo" value={announcement.modelo} onChange={onChange} required={true} autoComplete="off" />
                            <input type="number" className="iniciar" placeholder="preço" name="preco" value={announcement.preco} onChange={onChange} required={true} autoComplete="off" />
                            <input type="number" className="iniciar" placeholder="Ano" name="ano" value={announcement.ano} onChange={onChange} required={true} autoComplete="off" />
                            <input type="number" className="iniciar" placeholder="km" name="km" value={announcement.km} onChange={onChange} required={true} autoComplete="off" />
                        </div>
                        <br />
                        <input type="text" className="formItem" placeholder="Fotos" name="fotos" value={announcement.imagem} onChange={onChange} required={true} autoComplete="off" />
                        <br />
                        <br />
                        <textarea className="desc" placeholder="Descrição" name="descricao" value={announcement.descricao} onChange={onChange} required={true} autoComplete="off" />
                        <br />
                        <br />
                        <div className="buton">
                            <input type="submit" className="boton" value="Cadastrar anúncio"/>
                        </div>
                    </form>
            </main>

        <footer>
            Aqui vai ficar o footer
        </footer>
        </body>
    )
}

export default App;
