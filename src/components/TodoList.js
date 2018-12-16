import React from "react";
import { useStore } from "easy-peasy";
import Todo from "./Todo";

const TodoList = () => {
	const todos = useStore(state => state.todos);
	console.log(todos, "todos")
	const todosList = Object.values(todos);
	console.log(todosList);
	return (
		<div>
			{todosList.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
