import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = () => createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},
});

const TodoProvider = (props: any) => {
   const todos: Todo[] = [
        {id: 1, title: 'Ir ao supermercado', done: true},
        {id: 2, title: 'Academia', done: false},
    ];

    const addTodo = (title: string) => {

    }

    const removeTodo = (todo: Todo) => {}

    const toggleTodo = (todo: Todo) => {}
    return (
        <TodoContext.Provider value={
            {todos, addTodo, removeTodo, toggleTodo}
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;

