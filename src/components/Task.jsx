import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Add } from './Add';
import { toast } from 'sonner';
import { useState } from 'react';

const Task = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const [colour, setColour] = useState('border');

	function handleChange(e) {
		setText(e.target.value);
	}

	function addNewTask(e) {
		e.preventDefault();
		const task = text.trim();
		if (task !== '') {
			dispatch(addTodo({ text, colour }));
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
				className='border rounded px-2 py-1 w-full'
			/>
			<select
				onChange={(e) => setColour(e.target.value)}
				className='border rounded'
			>
				<option value='border'>No colour</option>
				<option value='bg-blue-200'>Blue</option>
				<option value='bg-green-200'>Green</option>
				<option value='bg-orange-200'>Orange</option>
				<option value='bg-pink-200'>Pink</option>
				<option value='bg-purple-200'>Purple</option>
				<option value='bg-red-200'>Red</option>
				<option value='bg-yellow-200'>Yellow</option>
			</select>
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
