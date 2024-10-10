import { v4 as uuidv4 } from 'uuid';
import { React, useState } from "react";


const TaskForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
          id: uuidv4(),
          text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your task'
                value={input}
                onChange={handleChange}
                name='text'

                className='task-input edit'
              />
              <button onClick={handleSubmit} className='task-button edit'>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                placeholder='Add a task'
                value={input}
                onChange={handleChange}
                name='text'
                className='task-input'

              />
              <button onClick={handleSubmit} className='task-button'>
                Add task
              </button>
            </>
          )}
        </form>
      );
}

export default TaskForm;