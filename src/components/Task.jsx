import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const Task = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	function addNewTask() {
		const task = inputRef.current.value.trim();
		if (task !== '') {
			dispatch(addTodo(task));
			inputRef.current.value = '';
		}
	}

	return (
		<div className='flex gap-1'>
			<input
				type='text'
				placeholder='Add task here...'
				ref={inputRef}
				className='border rounded px-3 py-1'
			/>
			<button
				className='border rounded px-3 py-1 shadow hover:shadow-xl'
				onClick={addNewTask}
			>
				Add task
			</button>
		</div>
	);
};

export default Task;
