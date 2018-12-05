import React, { Component } from "react";
import "./App.css";
import { StoreProvider, createStore } from "easy-peasy";
import TodoList from "./components/TodoList";
import { model } from "./index";

const store = createStore(model);

class App extends Component {
	render() {
		return (
			<StoreProvider store={store}>
				<TodoList />
			</StoreProvider>
		);
	}
}
export default App;
