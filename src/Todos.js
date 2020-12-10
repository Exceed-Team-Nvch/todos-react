import React, { useState } from 'react'
import './App.css'

const InputBar = ({ addListItem }) => {
  const [value, setValue] = useState('')

  // addTodo(value)
  return (
    <div className='input-group mb-3 col-lg-5'>
      {/* <form onSubmite={()=> }> */}
      <input
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='form-control'
        placeholder='What needs to be done?'
        aria-describedby='button-addon2'
        value={value}
      />
      <button
        onClick={() => addListItem(value, Date.now())}
        className='btn btn-outline-secondary'
        type='button'
        id='button-addon2'>
        V
      </button>
      {/* </form> */}
    </div>
  )
}

const List = ({ list, removeListItem }) => {
  return (
    <ul className='list-group '>
      {list.map((item) => (
        <ListItem item={item} key={item.id} removeListItem={removeListItem} />
      ))}
      <FilterBar />
    </ul>
  )
}

const ListItem = ({ item, removeListItem }) => (
  <li className='list-group-item d-flex justify-content-between align-items-center m-1'>
    <input className='form-check-input' type='checkbox' value='' />
    <div> {item.value}</div>
    <button
      onClick={() => removeListItem(item.id)}
      className='btn btn-outline-secondary'
      type='button'
      id='button-addon2'>
      X
    </button>
  </li>
)

const FilterBar = () => {
  return <div className='list-group-item m-1'>filterBar</div>
}

const Todos = () => {
  const [list, setList] = useState([])

  const removeListItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const addListItem = (value, id) => {
    let copyList = [...list]
    // console.log(newValue)
    copyList.push({ value, id })
    console.log(copyList)

    setList(copyList)
  }

  return (
    <div className='container m-5 p-5 d-flex flex-column align-items-center'>
      <div className='todo-header text-center  m-5 '>Todos</div>
      <div className='col-lg-6'>
        <InputBar addListItem={addListItem} />
        <List list={list} removeListItem={removeListItem} />
      </div>
    </div>
  )
}
export default Todos
