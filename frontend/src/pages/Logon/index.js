import React from 'react';
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom'

export default function Logon(){

    return (
       <div className="logon-container">
           <section className="form">
               <img src={LogoImg} alt="Be-The-Hero"/>

               <form> 
                   <h1>Faça seu LOGON</h1>
                   <input placeholder="Sua ID"/>
                   <button className="button" type="submit">Entrar</button>
               <Link className="backLink" to="/register"> 
               <FiLogIn size={16} color="#E02041"/>
               Não tenho cadastro</Link>

             </form>

           </section>
           <img src={HeroesImg} alt="heroes"/>
       </div>

    );
}
