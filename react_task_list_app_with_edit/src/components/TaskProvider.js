import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (!task.text.trim()) {
            return;
        }
        setTasks(prev => [task, ...prev]);
    }

    const completeTask = (id) => {
        let updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        });
        setTasks(prev => updatedTasks);
    };

    const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id))

    const updateTask = (taskId, newValue) => {
        if (!newValue.text.trim()) {
            return;
        }
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    }


    const contextValue = {
        tasks,
        addTask,
        completeTask,
        removeTask,
        updateTask,

    };

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => useContext(TaskContext);

export default TaskProvider;
