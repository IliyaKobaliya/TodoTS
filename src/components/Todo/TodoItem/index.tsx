import React from 'react'

import { ITodo } from '../../../interfaces'

type Delete = (id: number) => void

interface ITodoProps {
    item: ITodo,
    deleteTodo: Delete
}

export const TodoItem: React.FC<ITodoProps> = ({ item, deleteTodo }) => (
    <div key={item.id}>
        <h3>{item.name}</h3>
        <div>{item.description}</div>
        <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </div>
)  