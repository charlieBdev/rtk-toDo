import { useSelector, useDispatch } from 'react-redux';
import {
	deleteTodo,
	toggleTodo,
	setFirstRenderState,
} from '../features/todo/todoSlice';
import Delete from './Delete';
import Complete from './Complete';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

const TaskList = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const isFirstRender = useSelector((state) => state.todo.isFirstRender);
	const tasksCompleted = useSelector((state) => state.todo.tasksCompleted);
	const dispatch = useDispatch();

	function deleteTask(id) {
		dispatch(deleteTodo(id));
		if (isFirstRender) {
			dispatch(setFirstRenderState(false));
		}
		toast.error('Task deleted');
	}

	function toggleTask(task) {
		dispatch(toggleTodo(task.id));
		if (isFirstRender) {
			dispatch(setFirstRenderState(false));
		}

		if (!task.complete) {
			toast.success('Task completed');
			console.log(tasksCompleted);
			if ((tasksCompleted + 1) % 3 === 0) {
				confetti({ shapes: ['star'] });
			} else {
				confetti();
			}
		} else if (task.complete) {
			toast.error('Task incomplete');
		}
	}

	return (
		<div className='flex flex-col gap-3 w-full sm:w-1/2'>
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
									onClick={() => toggleTask(task)}
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
				<div className='grid gap-3'>
					<p>You have no more tasks.</p>
					<p>☕ Take a break! 🍪</p>
				</div>
			)}
		</div>
	);
};

export default TaskList;
