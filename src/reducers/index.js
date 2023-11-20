import taskReducer from './taskReducer';
const { combineReducers } = require('redux');

const rootReducer = combineReducers({
	tasks: taskReducer,
});

export default rootReducer;
