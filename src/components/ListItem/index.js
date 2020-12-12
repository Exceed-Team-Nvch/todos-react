import React from 'react'
import '../../App.css'

const ListItem = ({ item, removeListItem, tick }) => (
  <li className='list-group-item d-flex justify-content-between align-items-center '>
    <input
      className='form-check-input'
      type='checkbox'
      onChange={() => tick(item.id, item.done)}
      checked={item.done}
    />
    <div> {item.value}</div>
    <button
      onClick={() => store.dispatch(removeItem(item.id))}
      className='btn btn-outline-secondary'
      type='button'
      id='button-addon2'>
      X
    </button>
  </li>
)

export default ListItem
