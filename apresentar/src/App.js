
import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
           <Sobre nome={this.props.nome} cargo={this.props.cargo}
           idade={this.props.idade}></Sobre>
           
           <hr></hr>
            </div>
            
            );
    }
}



class Sobre extends Component{
    render(){
        return(
            
            <div><h2>Ola, sou o {this.props.nome}</h2>
            <h3>Meu cargo é {this.props.cargo}</h3>
            <h3>Eu tenho {this.props.idade} anos</h3>
            </div>
            
        );
    }
}

function App(){
return(
<div>
 <Equipe nome="Miguel" cargo="Dev" idade="22"></Equipe>
 <Equipe nome="Miguel" cargo="Dev" idade="22"></Equipe>
 <Equipe nome="Miguel" cargo="Dev" idade="22"></Equipe>
    </div>

); 
}

export default App;

 

