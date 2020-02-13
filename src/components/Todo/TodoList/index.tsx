import React from 'react'

import { TodoItem } from '../TodoItem'
import { ITodo } from '../../../interfaces'

type Delete = (id: number) => void

interface ITodoListProps {
    todos: ITodo[],
    deleteTodo: Delete
}


export const TodoList: React.FC<ITodoListProps> = ({ todos, deleteTodo }) => (
    (todos.length === 0) ?
        <div>Create new todo</div>
        :
        <div>
            {todos.map(item => TodoItem({ item, deleteTodo }))}
        </div>
)
