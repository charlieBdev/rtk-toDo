import { useSelector } from 'react-redux';

const Feedback = () => {
	const tasksCompleted = useSelector((state) => state.todo.tasksCompleted);
	return (
		<div>
			<p>Tasks completed: {tasksCompleted}</p>
		</div>
	);
};

export default Feedback;
