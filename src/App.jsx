import './App.css';
import Feedback from './components/Feedback';
import Quote from './components/Quote';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
	return (
		<div className='flex flex-col items-center gap-3'>
			<h1 className='text-3xl font-bold underline'>Todo List</h1>
			<Quote />
			<Feedback />
			<Task />
			<TaskList />
		</div>
	);
}

export default App;
