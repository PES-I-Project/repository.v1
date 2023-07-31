//import axios from "axios";
//import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import toggleDiv from './toggleDiv';

import { BsFillTrash3Fill, BsFillExplicitFill } from 'react-icons/bs';

//import Criar from "../criar-anuncio/criar.tsx"
const navigate=useNavigate()

const Home = () =>{    
    
    return (

        <body>
                <div className="container">
                    
                <header> 
                        <button className="btn_home" onClick={() => navigate('/')}>
                            <img src="src/assets/logo_G3.png" alt="imagem do botao"/>
                        </button>
                        <div>
                            <input type="search" name="Pesquisar" id="search" placeholder="Pesquisar veículo"/>
                            <div id="progresso"></div>
                        </div>
                        <button className="cadastrar" onClick={() => navigate('/novo-post')}>Novo anúncio</button>
                    
                </header>
                    
                    <main className="main-home">
                    <div id="menu_lateral" className="visivelLateral">
                            <div className="filtros">
                                <h1>Filtros</h1>
                                <div id="Marcas">
                                    <h2>Marcas</h2>
                                    <input type="checkbox" name="Kia"/>
                                    <label htmlFor="Kia"> Kia</label>
                                    <br/>
                                    <input type="checkbox" name="Renault"/>
                                    <label htmlFor="Renault"> Renault</label>
                                    <br/>
                                    <input type="checkbox" name="Volkswagen"/>
                                    <label htmlFor="Renault"> Volkswagen</label>
                                    <br/>
                                    <input type="checkbox" name="Chevrolet"/>
                                    <label htmlFor="Renault"> Chevrolet</label>
                                    <br/>
                                    <input type="checkbox" name="Hyundai"/>
                                    <label htmlFor="Renault"> Hyundai</label>
                                    <br/>
                                    <input type="checkbox" name="Toyota"/>
                                    <label htmlFor="Renault"> Toyota</label>
                                    <br/>
                                    <input type="checkbox" name="Fiat"/>
                                    <label htmlFor="Fiat"> Fiat</label>
                                    <br/>
                                    <input type="checkbox" name="Honda"/>
                                    <label htmlFor="Renault"> Honda</label>
                                    <br/>
                                </div>

                                <div id="Modelo">
                                    <h2>Quilometragem</h2>
                                    <input type="number" id="km" placeholder="KM"/>
                                </div>
                                
                                <div id="Ano">
                                    <h2>Ano</h2>
                                    <input type="number" className="number-home" min="1950" max="2024" step="1" placeholder="De"/>
                                    <input type="number" className="number-home" min="1950" max="2024" step="1" placeholder="Até"/>
                                    <br/>
                                </div>
                                <br/>
                                <button className="button">Buscar</button>
                            </div>
                        </div>

                            <div>
                            <div className="announcements">
                                <button id="Alternar" onClick={toggleDiv} >Ocultar filtros</button>
                                
                                <div className="announcement-vehicle">
                                    <img  className="img_car" src="src/assets/car.jpg" alt="" />
                                    <button className="editar-anuncio" onClick={() => navigate('/novo-post')}><BsFillExplicitFill/></button>
                                    <button className="excluir-anuncio" onClick={() => navigate('/novo-post')}><BsFillTrash3Fill/></button>
                                </div>
                                <div className="announcement-vehicle">
                                <img  className="img_car" src="src/assets/car.jpg" alt="" />
                                    <button className="editar-anuncio" onClick={() => navigate('/novo-post')}><BsFillExplicitFill/></button>
                                    <button className="excluir-anuncio" onClick={() => navigate('/novo-post')}><BsFillTrash3Fill/></button>
                                </div>
                                <div className="announcement-vehicle">
                                <img  className="img_car" src="src/assets/car.jpg" alt="" />
                                    <button className="editar-anuncio" onClick={() => navigate('/novo-post')}><BsFillExplicitFill/></button>
                                    <button className="excluir-anuncio" onClick={() => navigate('/novo-post')}><BsFillTrash3Fill/></button>
                                </div>
                                <div className="announcement-vehicle">
                                <img  className="img_car" src="src/assets/car.jpg" alt="" />
                                    <button className="editar-anuncio" onClick={() => navigate('/novo-post')}><BsFillExplicitFill/></button>
                                    <button className="excluir-anuncio" onClick={() => navigate('/novo-post')}><BsFillTrash3Fill/></button>
                                </div>  
                            </div>
                        </div>
                    </main>
                    
                        <footer>
                        <p>Meu Footer</p>
                        </footer>

                </div>
        </body>
    )
}

export default Home;