import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import style from './todo.module.css'

const Todo = (props) => {
  const { desc, title } = props.todo
  const { id } = props
  const handleClick=()=>{
    props.onRemove(id)
  }
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={style.btn} onClick={()=>{handleClick(id)}}>
          <FaTrashAlt />
        </button>
      </div>
    </article>
  )
}

export default Todo
