import React from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'

const dummyTodos = [
    {
        id: 1,
        title: 'this is title one',
        desc: 'this is desc one'
    },
    {
        id: 2,
        title: 'this is title two',
        desc: 'this is desc two'
    }
]

const Home = () => {
    return (
        <div className={style.home}>
            <h1>Todo App</h1>
            <NewTodo />
            <Todos todos={dummyTodos} />
        </div>
    )
}

export default Home
