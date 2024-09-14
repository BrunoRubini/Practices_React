import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ data,setTasks }) => {
    const handleDeleteTask = (id) => {
        const updatedTasks = data.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };
    return (
        <ul>
            {data.map((task) => (
                <Task
                    key={task.id}
                    name={task.name}
                    completed={task.completed}
                    onDelete={() => handleDeleteTask(task.id)}
                />
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    })).isRequired,
};

export default TaskList;
