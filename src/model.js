import { effect } from 'easy-peasy'
import mockService from './mock-service'

export default {
  todos: {
    // items: mockService.fetchTodos(),
    items: {},
    // actions
    fetched: (state, payload) => {
      state.items = payload.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc
      }, {})
    },
    saved: (state, payload) => {
      state.items[payload.id] = payload
    },
    // effects
    fetchTodos: effect(async dispatch => {
      const todos = await mockService.fetchTodos()
      dispatch.todos.fetched(todos)
    }),
    save: effect(async (dispatch, payload) => {
      const todo = await mockService.saveTodo(payload)
      dispatch.todos.saved(todo)
    }),
  },
  // effects
  initialise: effect(async dispatch => {
    await dispatch.todos.fetchTodos()
  }),
}