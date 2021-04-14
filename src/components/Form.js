import React, { useState, useEffect, useRef } from 'react';

const Form = props => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
        setInput('')
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Ingresa una tarea..."
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef} />
                    <button className="btn-add edit">Editar</button>
                </>
            ) : (
                <>
                <input
                    type="text"
                    placeholder="Ingresa una tarea..."
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef} />
                <button className="btn-add">Añadir</button>
            </>
            )}

        </form>
    )
}

export default Form;
