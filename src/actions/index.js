export const addToDo = (text) => {
	return {
		type: 'ADD_TASK',
		payload: {
			id: new Date().getTime(),
			text,
		},
	};
};

export const deleteToDo = (id) => {
	return {
		type: 'DELETE_TASK',
		payload: id,
	};
};
