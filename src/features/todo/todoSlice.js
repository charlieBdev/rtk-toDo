import { createSlice } from '@reduxjs/toolkit';

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
		},
		deleteTodo: (state, action) => {
			const taskToDelete = state.tasks.find(
				(task) => task.id === action.payload
			);

			state.tasks = state.tasks.filter((task) => task.id !== action.payload);

			if (taskToDelete && taskToDelete.complete && state.tasks.length > 0) {
				state.tasksCompleted--;
			}
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
			} else if (taskToUpdate && taskToUpdate.complete) {
				taskToUpdate.complete = false;
				state.tasksCompleted--;
			}
		},
	},
});

export const { addTodo, deleteTodo, setFirstRenderState, completeTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
