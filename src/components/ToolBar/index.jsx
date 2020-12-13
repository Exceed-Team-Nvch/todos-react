import React from 'react'
import '../../App.css'
import FilterBar from '../FilterBar'
import RemoveList from '../RemoveList'

const ToolBar = ({ setFilter, list }) => {
  const count = list.filter((todo) => !todo.done).length

  return (
    <div className='my-filter list-group-item  d-flex align-items-center justify-content-between'>
      <div>
        {count}
        items left
      </div>

      <FilterBar setFilter={setFilter} />
      <RemoveList />
    </div>
  )
}

export default ToolBar
