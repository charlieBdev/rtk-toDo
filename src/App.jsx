import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
	return (
		<>
			<h1>Totally Original ToDo List</h1>
			<Task />
			<TaskList />
		</>
	);
}

export default App;
