import React from 'react'
import style from './newtodo.module.css'

const NewTodo = () => {
    return (
        <form className={style.form} >
            <div className={style.formField}>
                <label htmlFor='title'>Title: </label>
                <input
                    type='text'
                    id='title'
                    name='title'
                />
            </div>
            <div className={style.formField}>
                <label htmlFor='desc'>Description: </label>
                <textarea
                    type='text'
                    id='desc'
                    name='desc'
                />
            </div>
            <button type='submit'>Add todo</button>
        </form>
    )
}

export default NewTodo
