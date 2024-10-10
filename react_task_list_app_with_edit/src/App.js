
import './App.css';
import TaskList from './components/TaskList';
import TaskProvider from './components/TaskProvider';

function App() {
  return (
    <div className="task-app">

      
      <TaskProvider>
        <TaskList />
        
      </TaskProvider> 

    </div>
  );
}

export default App;
