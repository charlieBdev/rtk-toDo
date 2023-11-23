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
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TaskList = () => {
	const tasks = useSelector((state) => state.todo.tasks);
	const isFirstRender = useSelector((state) => state.todo.isFirstRender);
	const tasksCompleted = useSelector((state) => state.todo.tasksCompleted);
	const dispatch = useDispatch();

	const liAnimation = {
		initial: { scale: 0 },
		animate: { scale: 1 },
		transition: {
			type: 'spring',
			stiffness: 260,
			damping: 20,
		},
		// exit: {
		// 	x: '100%',
		// 	opacity: 0,
		// 	transition: { duration: 0.2, ease: 'easeOut' },
		// },
	};

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
			if ((tasksCompleted + 1) % 3 === 0) {
				toast.success('3 tasks completed. Take a break! ☕🍪');
				var scalar = 2;
				var coffee = confetti.shapeFromText({ text: '☕🍪', scalar });
				confetti({ shapes: [coffee] });
			} else {
				toast.success('Task completed');
				confetti();
			}
		} else if (task.complete) {
			toast.error('Task incomplete');
		}
	}

	useEffect(() => {
		if (tasks.length === 0) {
			toast.success('You have no more tasks. Take 5!');
		}
	}, [tasks]);

	return (
		<div className='flex flex-col gap-3 w-full sm:w-1/2'>
			{tasks.length > 0 && (
				<div className='flex flex-col gap-3'>
					<ol className='flex flex-col gap-3'>
						{tasks.map((task, index) => (
							// <AnimatePresence>
							<motion.li
								{...liAnimation}
								className='flex gap-1 items-center'
								key={task.id}
							>
								<p
									className={`${task.colour} border rounded w-full px-2 py-1 text-left shadow`}
								>
									{index + 1}:{' '}
									<span className={task.complete ? 'line-through' : ''}>
										{task.text}
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
							</motion.li>
							// </AnimatePresence>
						))}
					</ol>
				</div>
			)}
			{/* {tasks.length === 0 && !isFirstRender && (
				<div className='grid gap-3'>
					<p>You have no more tasks.</p>
					<p>☕ Take a break! 🍪</p>
				</div>
			)} */}
		</div>
	);
};

export default TaskList;
