import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

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

    async function HomePage(event: React.FormEvent) {
        event.preventDefault()

        axios
            .post('http://localhost:5555/HomePage', blogpost)
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

}