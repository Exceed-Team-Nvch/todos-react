import React from 'react'
import './App.css'
import { store, removeCompleted } from './store/store'

const ToolBar = ({ setFilter, list }) => {
  const count = list.filter((todo) => !todo.done).length

  return (
    <div className="my-filter list-group-item  d-flex align-items-center justify-content-between">
      <div> {count} items left</div>

      <FilterBar setFilter={setFilter} />
      <RemoveList />
    </div>
  )
}

const FilterBar = ({ setFilter }) => (
  <div>
    <button
      className="my-btn btn btn-outline-secondary m-1"
      onClick={() => setFilter('All')}
    >
      All
    </button>
    <button
      className="my-btn btn btn-outline-secondary m-1"
      onClick={() => setFilter('Active')}
    >
      Active
    </button>
    <button
      className="my-btn btn btn-outline-secondary m-1"
      onClick={() => setFilter('Completed')}
    >
      Completed
    </button>
  </div>
)

const RemoveList = () => {
  return (
    <button
      className="my-btn btn btn-outline-secondary m-1"
      onClick={
        // removeCompleted
        () => store.dispatch(removeCompleted())
      }
    >
      Clear completed
    </button>
  )
}

export default ToolBar
