import React from 'react'

interface ITodoFormProps {
    addTodo: () => void,
    changeForm: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TodoForm: React.FC<ITodoFormProps> = ({ addTodo, changeForm }) => (
    <>
        <input name={`name`} placeholder={`Todo name...`} onChange={changeForm} />
        <input name={`description`} placeholder={`Todo description...`} onChange={changeForm} />
        <button onClick={addTodo}>Add todo</button>
    </> 
)