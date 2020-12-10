import React from 'react'
import './App.css'

const ToolBar = ({ setFilter, list, removeCompleted }) => {
  const count = list.filter((todo) => !todo.done).length

  return (
    <div className="my-filter list-group-item  d-flex align-items-center justify-content-between">
      <div> {count} items left</div>

      <FilterBar setFilter={setFilter} />
      <RemoveList removeCompleted={removeCompleted} />
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

const RemoveList = ({ removeCompleted }) => {
  return (
    <button
      className="my-btn btn btn-outline-secondary m-1"
      onClick={removeCompleted}
    >
      Clear completed
    </button>
  )
}

export default ToolBar
