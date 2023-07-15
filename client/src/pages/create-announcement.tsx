import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const [blogpost, setBlogpost] = useState({
        marca: '',
        modelo: '',
        ano: '',
        km: '',
        fotos: '',
        descricao: ''
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        setBlogpost({ ...blogpost, [e.target.name]: e.target.value })
    }

    async function criarPost(event: React.FormEvent) {
        event.preventDefault()

        axios
            .post('http://localhost:5555/api/novo-anuncio', blogpost)
            .then((res) => {
                setBlogpost({
                    marca: '',
                    modelo: '',
                    ano: '',
                    km: '',
                    fotos: '',
                    descricao: ''
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
                <input type="text" className="formItem" placeholder="Marca" name="marca" value={blogpost.marca} onChange={onChange} required={true} />
                <input type="text" className="formItem" placeholder="Modelo" name="modelo" value={blogpost.modelo} onChange={onChange} required={true} />
                <input type="text" className="formItem" placeholder="Ano" name="ano" value={blogpost.ano} onChange={onChange} required={true} />
                <input type="text" className="formItem" placeholder="km" name="km" value={blogpost.km} onChange={onChange} required={true} />
                <br />
                <input type="text" className="formItem" placeholder="Fotos" name="fotos" value={blogpost.fotos} onChange={onChange} required={true} />
                <br />
                <textarea className="formItem" placeholder="Descrição" name="descricao" value={blogpost.descricao} onChange={onChange} required={true} />
                <br />
                <input type="submit" value="Cadastrar anúncio" />
            </form>
        </div>
    )
}

export default App;
