import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../actions';

const Task = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	function addNewTask() {
		const task = inputRef.current.value.trim();
		if (task !== '') {
			dispatch(addToDo(task));
			inputRef.current.value('');
		}
	}

	return (
		<div className='task-component'>
			<div className='addTask'>
				<input
					type='text'
					placeholder='Add task here...'
					ref={inputRef}
					className='task-input'
				/>
				<button onClick={addNewTask}>Add task</button>
			</div>
		</div>
	);
};

export default Task;
