import React from 'react'

import '../../App.css'

const FilterBar = ({ setFilter }) => (
  <div>
    <button
      className='my-btn btn btn-outline-secondary m-1'
      onClick={() => setFilter('All')}>
      All
    </button>
    <button
      className='my-btn btn btn-outline-secondary m-1'
      onClick={() => setFilter('Active')}>
      Active
    </button>
    <button
      className='my-btn btn btn-outline-secondary m-1'
      onClick={() => setFilter('Completed')}>
      Completed
    </button>
  </div>
)

export default FilterBar
