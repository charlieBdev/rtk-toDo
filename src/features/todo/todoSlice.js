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
			const newTodo = {
				id: Date.now(),
				text: action.payload.text,
				complete: false,
				colour: action.payload.colour,
			};
			state.tasks.push(newTodo);
		},
		toggleTodo: (state, action) => {
			const todo = state.tasks.find((task) => task.id === action.payload);

			if (todo && !todo.complete) {
				state.tasksCompleted++;
			} else if (todo && todo.complete) {
				state.tasksCompleted--;
			}

			todo.complete = !todo.complete;
		},
		deleteTodo: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		setFirstRenderState: (state, action) => {
			state.isFirstRender = action.payload;
		},
	},
});

export const { addTodo, deleteTodo, setFirstRenderState, toggleTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
