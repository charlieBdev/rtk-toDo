import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
	return (
		<div className='grid place-items-center gap-3'>
			<h1 className='text-3xl font-bold underline'>
				Totally Original ToDo List
			</h1>
			<Task />
			<TaskList />
		</div>
	);
}

export default App;
