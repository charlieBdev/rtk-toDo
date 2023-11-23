import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Add } from './Add';
import { toast } from 'sonner';
import { useState } from 'react';
import Down from './Down';

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
		} else {
			toast.error('Add a task');
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
			<div className='relative inline-block text-left'>
				<select
					onChange={(e) => setColour(e.target.value)}
					className={`border rounded w-[34px] p-1 ${colour} appearance-none hover:cursor-pointer shadow`}
				>
					<option value='border bg-white' className='bg-white'></option>
					<option value='bg-blue-400' className='bg-blue-400'></option>
					<option value='bg-green-400' className='bg-green-400'></option>
					<option value='bg-pink-400' className='bg-pink-400'></option>
					<option value='bg-orange-400' className='bg-orange-400'></option>
					<option value='bg-yellow-400' className='bg-yellow-400'></option>
					<option value='bg-purple-400' className='bg-purple-400'></option>
				</select>
				<div className='absolute inset-0 grid place-items-center pointer-events-none'>
					<Down />
				</div>
			</div>
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
