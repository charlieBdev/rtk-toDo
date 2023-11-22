import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

const initialState = {
	tasks: [],
	isFirstRender: true,
	tasksCompleted: 0,
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.tasks.push({
				id: Date.now(),
				text: action.payload,
				complete: false,
			});
			toast.success('Task added');
		},
		deleteTodo: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
			toast.error('Task deleted');
		},
		setFirstRenderState: (state, action) => {
			state.isFirstRender = action.payload;
		},
		completeTodo: (state, action) => {
			const { id } = action.payload;
			const taskToUpdate = state.tasks.find((task) => task.id === id);

			if (taskToUpdate && !taskToUpdate.complete) {
				taskToUpdate.complete = true;
				state.tasksCompleted++;
				toast.success('Task completed');
			} else if (taskToUpdate && taskToUpdate.complete) {
				taskToUpdate.complete = false;
				state.tasksCompleted--;
				toast.error('Task incomplete');
			}
		},
	},
});

export const { addTodo, deleteTodo, setFirstRenderState, completeTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
