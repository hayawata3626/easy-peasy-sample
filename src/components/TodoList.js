import React from "react";
import { useStore } from "easy-peasy";

const TodoList = () => {
	debugger;
	const todos = useStore(state => {
		console.log(state);
		return state.todos.items;
	});
	return (
		<div>
			{todos.map((todo, idx) => (
				<div key={idx}>{todo.text}</div>
			))}
		</div>
	);
};

export default TodoList;
