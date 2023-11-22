import { useSelector } from 'react-redux';

const Feedback = () => {
	const tasksCompleted = useSelector((state) => state.todo.tasksCompleted);
	return (
		<div className='flex justify-between w-full sm:w-1/2'>
			<p></p>
			<p className='text-sm'>Tasks completed: {tasksCompleted}</p>
		</div>
	);
};

export default Feedback;
