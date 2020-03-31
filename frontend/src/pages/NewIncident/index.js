import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom'
import LogoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';


export default function NewIncident (){

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={LogoImg} alt="Be The Hero"/>
                <h1> Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="backLink" to="/profile"> 
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para home</Link>
            </section>
            <form>
                <input placeholder="Título de caso"/>
                <textarea placeholder="Descrição"/>
                <input placeholder="Valor em reais"/>
                  
                
                <button className="button" type="submit"> Cadastrar</button>
            </form>
            
        </div>
    </div>
);

    

}