import React, { useState } from 'react'

import { TodoForm } from '../../Todo/TodoForm/index'
import { TodoList } from '../../Todo/TodoList/index'
import { ITodo } from '../../../interfaces'

interface IForm {
    name: string,
    description: string
}

export const TodoPage: React.FC = () => {
    const [form, setForm] = useState<IForm>({ name: ``, description: `` })
    const [todos, setTodos] = useState<ITodo[]>([])

    const addTodo = () => {
        const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
        setTodos([...todos, { id, ...form }])
    }

    const deleteTodo = (id: number) => {
        const index = todos.findIndex(item => item.id === id);
        setTodos([...todos.slice(0, index),...todos.slice(index + 1)])
    }

    const changeForm = (event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [event.target.name]: event.target.value })

    return (
        <>
            <TodoForm addTodo={addTodo} changeForm={changeForm} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}