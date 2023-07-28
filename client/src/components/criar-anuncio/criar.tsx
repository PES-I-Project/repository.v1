import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./criar.css"

function App() {
    const navigate = useNavigate();
    const [announcement, setAnnouncement] = useState({
        ano: '',
        descricao: '',
        imagem: '',
        km: '',
        marca: '',
        modelo: '',
        preco: ''
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        setAnnouncement({ ...announcement, [e.target.name]: e.target.value })
    }

    async function criarPost(event: React.FormEvent) {
        event.preventDefault()

        axios
            .post('http://localhost:5555/api/novo-anuncio', announcement)
            .then((res) => {
                setAnnouncement({
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
        <div className="form">
            <h1>Criar um novo post</h1>
            <form onSubmit={criarPost}>
                <input type="text" className="formItem" placeholder="Marca" name="marca" value={announcement.marca} onChange={onChange} required={true} autoComplete="off" />
                <input type="text" className="formItem" placeholder="Modelo" name="modelo" value={announcement.modelo} onChange={onChange} required={true} autoComplete="off" />
                <input type="number" className="formItem" placeholder="Ano" name="ano" value={announcement.ano} onChange={onChange} required={true} autoComplete="off" />
                <input type="number" className="formItem" placeholder="preco" name="preco" value={announcement.preco} onChange={onChange} required={true} autoComplete="off" />
                <input type="number" className="formItem" placeholder="km" name="km" value={announcement.km} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <input type="text" className="formItem" placeholder="Fotos" name="imagem" value={announcement.imagem} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <textarea className="formItem" placeholder="Descrição" name="descricao" value={announcement.descricao} onChange={onChange} required={true} autoComplete="off" />
                <br />
                <input type="submit" value="Cadastrar anúncio" />
            </form>
        </div>
    )
}

export default App;
