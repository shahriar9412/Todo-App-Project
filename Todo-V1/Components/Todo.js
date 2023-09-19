import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import style from './todo.module.css'

const Todo = (props) => {
  const { id, desc, title } = props.todo
  return (
    <article className={style.todo}>
      <div>
        <p>{id}</p>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn}>
          <FaTrashAlt />
        </button>
      </div>
    </article>
  )
}

export default Todo
