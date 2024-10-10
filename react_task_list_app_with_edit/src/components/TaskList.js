import { useTaskContext } from "./TaskProvider"
import TaskForm from './TaskForm';
import Task from './Task';
import React from 'react';

const TaskList = () => {
    const { tasks, addTask } = useTaskContext();

    return (
        <div>
            <h1>Create a list of your tasks</h1>
            <TaskForm onSubmit={addTask}/>
            <Task tasks={tasks} />
        </div>
    )
}


const MemoizeTaskList = React.memo(TaskList);
export default MemoizeTaskList;
