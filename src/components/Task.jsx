import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { Add } from './Add';

const Task = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	function addNewTask(e) {
		e.preventDefault();
		const task = inputRef.current.value.trim();
		if (task !== '') {
			dispatch(addTodo(task));
			inputRef.current.value = '';
		}
	}

	return (
		<form className='flex gap-1 w-full sm:w-1/2' onSubmit={addNewTask}>
			<input
				type='text'
				placeholder='Add task here...'
				ref={inputRef}
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
