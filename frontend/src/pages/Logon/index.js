import React,{useState} from 'react';
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import api from '../../services/api';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');


        }catch(err){
            alert('Falha no Login, tente novamente');

        }


    }

    return (
       <div className="logon-container">
           <section className="form">
               <img src={LogoImg} alt="Be-The-Hero"/>

               <form onSubmit={handleLogin}> 
                   <h1>Faça seu LOGON</h1>
                   <input 
                        placeholder="Sua ID"
                        onChange={ e=> setId(e.target.value)}
                        />
                   <button className="button"type="submit">Entrar</button>
               <Link className="backLink" to="/register"> 
               <FiLogIn size={16} color="#E02041"/>
               Não tenho cadastro</Link>

             </form>

           </section>
           <img src={HeroesImg} alt="heroes"/>
       </div>

    );
}
