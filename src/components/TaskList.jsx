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
			<div className=''>
				{tasks.length > 0 ? (
					<>
						<h3>Your tasks:</h3>
						<ul className=''>
							{tasks.map((task) => (
								<li className='' key={task.id}>
									{task.text}
									<button className='' onClick={() => deleteTask(task.id)}>
										delete
									</button>
								</li>
							))}
						</ul>
					</>
				) : (
					<p>Your work is done! Add a task!</p>
				)}
			</div>
		</div>
	);
};

export default TaskList;
