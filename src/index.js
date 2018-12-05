import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, effect } from "easy-peasy";
import mockService from "./mock-service";

export const model = createStore({
	todos: {
		items: [],
		saveTodo: effect(async (dispatch, payload, getState) => {
			console.log(mockService);
			const saved = await mockService.saveTodo(payload);
			console.log(getState());
			dispatch.todos.todoSaved(saved);
		}),
		addTodo: (state, payload) => {
			state.items.push(payload);
		},
		todoSaved: (state, payload) => {
			state.items.push(payload);
		}
	}
});

// store.dispatch.todos.saveTodo("Install easy-peasy").then(() => {
// 	mockService.fetchTodos();
// });

// console.log(store.getState());
mockService.fetchTodos().then(values => {
	// console.log(store.todos);
	// store.todos.items = values.map(todo => {
	// 	return todo;
	// });
	values.forEach(element => {
		model.getState().todos.items.push(element);
	});
	// store.todos.push(value);
});
console.log(model.getState().todos.items);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
