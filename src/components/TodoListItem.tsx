import React from 'react';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {

    const onRemove = (todo: Todo) => {
        console.log("Removido")
    }


    const handleChange = () => {
        console.log("Mudou")
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" 
                    checked={props.todo.done}
                    onChange={handleChange}  />
                </label>
            </td>
            <td className="uk-width-expanded">
                {props.todo.title}
                </td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" 
                uk-icon="trash"
                onClick={() => onRemove(props.todo)}
                ></button>
            </td>
        </tr>
    );
}

export default TodoListItem;