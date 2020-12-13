import React from 'react'
import '../../App.css'
import { removeCompleted } from '../../actions'
import { store } from '../../store'

const RemoveList = () => {
  return (
    <button
      className='my-btn btn btn-outline-secondary m-1'
      onClick={() => store.dispatch(removeCompleted())}>
      Clear completed
    </button>
  )
}

export default RemoveList
