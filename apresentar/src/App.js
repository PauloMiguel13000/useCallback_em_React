
import React from 'react';

const Equipe = (props) =>{
    return(
        <div>
           <Sobre nome={props.nome} cargo={props.cargo} 
           idade={props.idade}/>

           <Social fb={props.facebook} lk={props.linkedin}  ig={props.instagram}/>
           
           <hr/>
        </div>
    );
}
const Social = (props) => {
    return(
        <div className='engloba'>
            <div className='alinhar'>
            <a href={props.lk}>Linkedin </a>

         
            </div>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
        <h2>Ola sou o(a) {props.nome}</h2> 
        <h2>Tenho {props.idade} anos</h2>
        <h2>e sou {props.cargo}</h2>    
        </div>
    );
}

function App(){
return(
<div>
 <h1>Conheca nossa equipe:</h1>
 
    <Equipe nome="Miguel" cargo="Programador" idade= "22" 
    facebook="http://google.com" linkedin="https://br.linkedin.com/in/paulo-miguel-98828617a?trk=people-guest_people_search-card" instagram="http://google.com"/>
    <Equipe nome="Jonatan" cargo="Designer" idade="25" 
  facebook="http://google.com" linkedin="https://br.linkedin.com/in/paulo-miguel-98828617a?trk=people-guest_people_search-card" instagram="http://google.com"/>
    <Equipe nome="Joaquim" cargo="Engenheiro" idade="27" 
   facebook="http://google.com" linkedin="https://br.linkedin.com/in/paulo-miguel-98828617a?trk=people-guest_people_search-card" instagram="http://google.com"/>
 </div>

); 
}

export default App;

 

