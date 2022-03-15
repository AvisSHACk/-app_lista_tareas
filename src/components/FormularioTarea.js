import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTarea = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas,
                {
                    id:uuidv4(),
                    nombre:inputTarea,
                    completada:false
                }
            ]
        );

        cambiarInputTarea("");
    }

    return (
        <form action="" className='formulario-tareas' onSubmit={submitHandler}>
            <input 
                className="formulario-tareas__input" 
                type="text" 
                placeholder='Escriba una tarea'
                value={inputTarea}
                onChange={(e) => cambiarInputTarea(e.target.value)}
            />
                
            <button className='formulario-tareas__btn' type='submit'>
                <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn"/>
            </button>
        </form>
    )
}

export default FormularioTarea;