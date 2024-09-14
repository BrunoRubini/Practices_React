import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ data, setTasks }) => {
    const [nombre, setNombre] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        if (validarNombre(nombre)) {
            const newTask = {
                id: Math.random().toString(),
                name: nombre,
                completed: false,
            };
            const updatedTasks = [...data, newTask];
            setTasks(updatedTasks);
            setNombre('');
        } else {
            alert("El nombre no puede estar vacío.");
        }
    };

    const validarNombre = (nombre) => {
        if (nombre.trim() === "") {
            return false;
        }
        return true;
    }
    function handleNombre(e) {
        setNombre(e.target.value);
    }

    return (
        <>
            <h2>Agregar Tarea</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="taskName">Nombre de la tarea: </label>
                <input
                    id="taskName"
                    type="text"
                    value={nombre}
                    onChange={handleNombre}
                />
                <button type="submit">Agregar</button>
            </form>
        </>
    );
};

TaskForm.propTypes = {
    data: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
};

export default TaskForm;
