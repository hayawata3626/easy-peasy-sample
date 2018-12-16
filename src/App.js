import React, { useEffect } from "react";
import { useAction } from "easy-peasy";
import TodoList from "./components/TodoList";

const App = () => {
	const initialise = useAction(actions => actions.initialise);
	useEffect(() => {
		initialise()
	});
	return (
		<TodoList />
	);
};

export default App
