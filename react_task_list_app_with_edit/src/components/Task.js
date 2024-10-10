import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useTaskContext } from "./TaskProvider"
import TaskForm from './TaskForm';


function Task() {
    const { tasks, completeTask, removeTask, updateTask } = useTaskContext();
    const [edit, setEdit] = useState({
        id: null,
        text: ''
    });

    const submitUpdate = value => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            text: ''
        });
    };

    if(edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />;
    }


return tasks.map((task) => (
    <div className={task.isComplete ? 'task-completed' : 'task-incompleted'} key={task.id}>
        <div key={task.id} onClick={() => completeTask(task.id)}>
            {task.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine onClick={() => removeTask(task.id)} className='delete-icon'/>
            <TiEdit onClick={() => setEdit({ id: task.id, value: task.text })} className='edit-icon'/>
        </div>
    </div>
  ));
}

const MemoizeTask = React.memo(Task);
export default MemoizeTask;
