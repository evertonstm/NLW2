import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem (){
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/22085525?s=400&u=de6176f6fb0b454d4fd5156e83db89d0eec7dda3&v=4" alt="Everton Reis"/>
      <div>
        <strong>Everton Reis</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        Apaixomado por explodir coisas em laboratório e por mudar a vida de pessoas através de experiências 
        <br /><br /> 
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 100,00 </strong>
      </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      
    </footer>
  </article>
  )
}

export default TeacherItem;