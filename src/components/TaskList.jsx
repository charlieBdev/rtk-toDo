import { useSelector, useDispatch } from 'react-redux';
import {
	completeTodo,
	deleteTodo,
	setFirstRenderState,
} from '../features/todo/todoSlice';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Delete from './Delete';
import Complete from './Complete';

const TaskList = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const tasksComplete = useSelector((state) => state.todo.tasksComplete);
	const isFirstRender = useSelector((state) => state.todo.isFirstRender);
	const dispatch = useDispatch();
	const [deleteClicked, setDeleteClicked] = useState(false);

	function deleteTask(id) {
		setDeleteClicked(true);
		dispatch(deleteTodo(id));
		dispatch(setFirstRenderState(false));
	}

	function completeTask(id) {
		setDeleteClicked(false);
		const taskToComplete = tasks.find((task) => task.id === id);
		if (taskToComplete) {
			dispatch(completeTodo({ id }));
			dispatch(setFirstRenderState(false));
		}
	}

	useEffect(() => {
		const allTasksComplete =
			tasks.length > 0 && tasks.every((task) => task.complete);

		if (allTasksComplete && !isFirstRender && !deleteClicked) {
			confetti();
		}
	}, [tasks, isFirstRender]);

	return (
		<div className='flex flex-col gap-3 w-full sm:w-1/2'>
			<p>Tasks completed: {tasksComplete}</p>
			{tasks.length > 0 && (
				<div className='flex flex-col gap-3'>
					<ol className='flex flex-col gap-3'>
						{tasks.map((task, index) => (
							<li className='flex gap-1 items-center' key={task.id}>
								<p className='border rounded w-full p-1 text-left'>
									Task {index + 1}:{' '}
									<span className={task.complete ? 'line-through' : ''}>
										{task.text} {task.complete}
									</span>
								</p>
								<button
									className={`border rounded p-1 shadow hover:shadow-xl ${
										task.complete ? 'text-neutral-500' : ''
									}`}
									onClick={() => completeTask(task.id)}
									aria-label={`Complete task: ${task.text}`}
								>
									<Complete />
									{task.complete}
								</button>
								<button
									className='border rounded p-1 shadow hover:shadow-xl'
									onClick={() => deleteTask(task.id)}
									aria-label={`Delete task: ${task.text}`}
								>
									<Delete />
								</button>
							</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);
};

export default TaskList;
