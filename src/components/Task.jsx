import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ name, completed, onDelete }) => {
    const [completado, setCompletado] = useState(completed);

    const changeStyle = {
        color: completado ? 'green' : 'red'
    };
    const handleEliminar = () => {
        onDelete();
    };
    return (
        <li style={changeStyle}>
            <input
                type="checkbox"
                checked={completado}
                onChange={() => setCompletado(!completado)}
            />
            {name}
            <button onClick={handleEliminar}>Eliminar</button>
        </li>
    );
};

Task.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};

export default Task;
