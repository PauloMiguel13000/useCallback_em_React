/* eslint-disable no-undef */
import React, {useState} from 'react';

function App(){

    const [tarefas, setTarefas] = useState(['Pagar a contar de luz',
'Estudar React Hooks']);
const [input, setInput] = useState('');
function handleAdd(){
setTarefas([...tarefas, input]);
setInput('');

}

    return(
        <div>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
           <button type='button' onClick={handleAdd}>Add</button>
        </div>

    );
}

export default App;