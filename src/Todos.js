import React, { useState, useEffect } from 'react'
import './App.css'
import InputBar from './InputBar.js'
import List from './List.js'
import { store } from './store/store'

const Todos = () => {
  const [list, setList] = useState([])
  const [filter, setFilter] = useState('All')
  const toCompleted = () => {
    setList(
      list.map((todo) => {
        todo.done = !todo.done
        return todo
      })
    )
  }

  store.subscribe(() => {
    setList(store.getState().list)
  })

  const getListCategory = () => {
    console.log(store.getState())
    if (filter === 'Active') {
      return list.filter((todo) => !todo.done)
    }
    if (filter === 'Completed') {
      return list.filter((todo) => todo.done)
    }
    return list
  }

  const removeListItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'))
    const filter = localStorage.getItem('filter')
    if (todos) {
      setList(todos)
    }
    if (filter) {
      setFilter(filter)
    } else {
      localStorage.setItem('filter', 'All')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(list))
    localStorage.setItem('filter', filter)
  }, [list, filter])

  const tick = (id, done) => {
    let newList = list.map((item) => {
      if (item.id === id) {
        item.done = !done
      }
      return item
    })

    setList(newList)
  }

  return (
    <div className="container p-5 d-flex flex-column align-items-center">
      <div className="todo-header text-center  m-5 ">Todos</div>

      <div className="my-input">
        <InputBar toCompleted={toCompleted} />
      </div>

      <div className="my-list">
        <List
          list={list}
          categoryList={getListCategory(list)}
          tick={tick}
          setFilter={setFilter}
        />
      </div>
    </div>
  )
}
export default Todos
