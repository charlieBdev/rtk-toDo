import { useSelector, useDispatch } from 'react-redux';
import {
	completeTodo,
	deleteTodo,
	setFirstRenderState,
} from '../features/todo/todoSlice';
import confetti from 'canvas-confetti';
import Delete from './Delete';
import Complete from './Complete';

const TaskList = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const tasksComplete = useSelector((state) => state.todo.tasksComplete);
	const isFirstRender = useSelector((state) => state.todo.isFirstRender);
	const dispatch = useDispatch();

	function deleteTask(id) {
		dispatch(deleteTodo(id));
		dispatch(setFirstRenderState(false));
	}

	function completeTask(id) {
		const taskToComplete = tasks.find((task) => task.id === id);

		if (taskToComplete) {
			dispatch(completeTodo({ id }));
			dispatch(setFirstRenderState(false));
			if (!taskToComplete.complete) {
				confetti();
			}
		}
	}

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
			{tasks.length === 0 && !isFirstRender && (
				<p>You are done here. Take 5!</p>
			)}
		</div>
	);
};

export default TaskList;
