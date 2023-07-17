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
        <div className="form">
            <h1>Criar um novo post</h1>
            <form onSubmit={criarPost}>
                <input type="text" className="formItem" placeholder="Marca" name="marca" value={blogpost.marca} onChange={onChange} required={true} autoComplete="off" />
                <input type="text" className="formItem" placeholder="Modelo" name="modelo" value={blogpost.modelo} onChange={onChange} required={true} autoComplete="off" />
                <input type="text" className="formItem" placeholder="Ano" name="ano" value={blogpost.ano} onChange={onChange} required={true} autoComplete="off" />
                <input type="text" className="formItem" placeholder="preco" name="preco" value={blogpost.preco} onChange={onChange} required={true} autoComplete="off" />
                <input type="text" className="formItem" placeholder="km" name="km" value={blogpost.km} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <input type="text" className="formItem" placeholder="Fotos" name="imagem" value={blogpost.imagem} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <textarea className="formItem" placeholder="Descrição" name="descricao" value={blogpost.descricao} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <input type="submit" value="Cadastrar anúncio" />
            </form>
        </div>
    )
}

export default App;
