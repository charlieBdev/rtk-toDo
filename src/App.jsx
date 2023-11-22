import './App.css';
import Feedback from './components/Feedback';
import Quote from './components/Quote';
import Task from './components/Task';
import TaskList from './components/TaskList';
import { Toaster } from 'sonner';

function App() {
	return (
		<div className='flex flex-col items-center gap-3'>
			<h1 className='text-2xl font-bold'>Todo List</h1>
			<Quote />
			<Feedback />
			<Task />
			<TaskList />
			<Toaster />
		</div>
	);
}

export default App;
