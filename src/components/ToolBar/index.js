import React from 'react'
import '../../App.css'
import { FilterBar } from '../FilterBar/index'
import { RemoveList } from '../RemoveList/index'

const ToolBar = ({ setFilter, list }) => {
  const count = list.filter((todo) => !todo.done).length

  return (
    <div className='my-filter list-group-item  d-flex align-items-center justify-content-between'>
      <div> {count} items left</div>

      <FilterBar setFilter={setFilter} />
      <RemoveList />
    </div>
  )
}

export default ToolBar
