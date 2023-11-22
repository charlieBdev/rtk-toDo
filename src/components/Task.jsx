import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Add } from './Add';
import { toast } from 'sonner';
import { useState } from 'react';

const Task = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	function addNewTask(e) {
		e.preventDefault();
		const task = text.trim();
		if (task !== '') {
			dispatch(addTodo(task));
			toast.success('Task added');
			setText('');
		}
	}

	return (
		<form className='flex gap-1 w-full sm:w-1/2' onSubmit={addNewTask}>
			<input
				type='text'
				placeholder='Add task here...'
				value={text}
				onChange={handleChange}
				className='border rounded p-1 w-full'
			/>
			<button
				className='border rounded p-1 shadow hover:shadow-xl'
				type='submit'
				aria-label='Add task'
			>
				<Add />
			</button>
		</form>
	);
};

export default Task;
