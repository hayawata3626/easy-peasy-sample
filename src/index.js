import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "easy-peasy";

const model = {
	todos: {
		items: [],
		addTodo: (state, payload) => {
			state.items.push(payload);
		}
	}
};
const store = createStore(model);
console.log(store.getState().todos.items);
store.dispatch.todos.addTodo("Install easy-peasy");
console.log(store.getState().todos.items);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
