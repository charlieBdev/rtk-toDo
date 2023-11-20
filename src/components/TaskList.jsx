import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

const TaskList = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const dispatch = useDispatch();

	function deleteTask(id) {
		dispatch(deleteTodo(id));
	}

	return (
		<div className=''>
			{tasks.length > 0 ? (
				<div className='flex flex-col gap-3'>
					<h3>Your tasks:</h3>
					<ul className='flex flex-col gap-3'>
						{tasks.map((task) => (
							<li
								className='flex gap-3 items-center justify-between'
								key={task.id}
							>
								{task.text}
								<button
									className='border rounded px-3 py-1 shadow hover:shadow-xl'
									onClick={() => deleteTask(task.id)}
								>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p>Your work here is done! Take 5!</p>
			)}
		</div>
	);
};

export default TaskList;
