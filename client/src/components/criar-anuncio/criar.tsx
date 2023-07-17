import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./criar.css"

function App() {
    const navigate = useNavigate();
    const [blogpost, setBlogpost] = useState({
        ano: '',
        descricao: '',
        imagem: '',
        km: '',
        marca: '',
        modelo: '',
        preco: ''
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        setBlogpost({ ...blogpost, [e.target.name]: e.target.value })
    }

    async function criarPost(event: React.FormEvent) {
        event.preventDefault()

        axios
            .post('http://localhost:5555/novo-anuncio', blogpost)
            .then((res) => {
                setBlogpost({
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
                console.log("Fudeu Familia");
            });
    }

    return (

        <body>
            
        
        <header>
            <button className="btn_home">
                <img src=".../src/assets/image/logo_G3.png" alt="image"/>
            </button>
            <div>
                <input type="search" name="Pesquisar" id="search" placeholder="Pesquisar veículo"/>
            </div>
        </header>

        <main>

                <form onSubmit={criarPost}>
                    <div className="infos-init">
                        <input type="text" className="iniciar" placeholder="Marca" name="marca" value={blogpost.marca} onChange={onChange} required={true} autoComplete="off" />
                        <input type="text" className="iniciar" placeholder="Modelo" name="modelo" value={blogpost.modelo} onChange={onChange} required={true} autoComplete="off" />
                        <input type="text" className="iniciar" placeholder="preço" name="preco" value={blogpost.preco} onChange={onChange} required={true} autoComplete="off" />
                        <input type="text" className="iniciar" placeholder="Ano" name="ano" value={blogpost.ano} onChange={onChange} required={true} autoComplete="off" />
                        <input type="text" className="iniciar" placeholder="km" name="km" value={blogpost.km} onChange={onChange} required={true} autoComplete="off" />
                    </div>
                    <br />
                    <input type="file" className="formItem" placeholder="Fotos" name="fotos" value={blogpost.imagem} onChange={onChange} required={true} autoComplete="off" />
                    <br />
                    <br />
                    <textarea className="desc" placeholder="Descrição" name="descricao" value={blogpost.descricao} onChange={onChange} required={true} autoComplete="off" />
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
