import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            nome: "Miguel",
            contador: 0,
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }
    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('igual a zero!')
        }
        state.contador -=1;
        state.nome = 'diminuindo'
        this.setState(state);
    }
    aumentar(){
        let state = this.state;
        state.contador +=1;
        state.nome = 'Aumentando'
  this.setState(state)
    }
    render(){
       
        return(

            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <h3>
                    
                    <button onClick={this.diminuir}>-</button>{this.state.contador}
                <button onClick={this.aumentar}>+</button></h3> 

            </div>
        )
    }
}

export default App;