import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: [],
	isFirstRender: true,
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.tasks.push({ id: Date.now(), text: action.payload });
		},
		deleteTodo: (state, action) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		setFirstRenderState: (state, action) => {
			state.isFirstRender = action.payload;
		},
	},
});

export const { addTodo, deleteTodo, setFirstRenderState } = todoSlice.actions;

export default todoSlice.reducer;
