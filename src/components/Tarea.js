import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.nombre)

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        cambiarEditandoTarea(false);
    }

    return(
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
                icon={tarea.completada ? faCheckSquare : faSquare} 
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompletada(tarea.id)}
            />
            <div className="lista-tareas__texto">
                {editandoTarea ? 
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={(nuevaTarea)}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        />
                        <button>Actualizar</button>
                    </form>
                :
                        tarea.nombre
                }
            </div>
            <div className="lista-tarea__botones">
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className=" lista-tareas__icono lista-tareas__icono-accion"
                    onClick={() => cambiarEditandoTarea(!editandoTarea)}
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className=" lista-tareas__icono lista-tareas__icono-accion" 
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>
    )
}

export default Tarea;