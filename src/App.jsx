import './App.css';
import Quote from './components/Quote';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
	return (
		<div className='grid place-items-center gap-3'>
			<h1 className='text-3xl font-bold underline'>Totes OG Todo List</h1>
			<Quote />
			<Task />
			<TaskList />
		</div>
	);
}

export default App;
