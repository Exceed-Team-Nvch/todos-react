import React from 'react'
import './App.css'
import ToolBar from './ToolBar.js'

const List = ({
  list,
  removeListItem,
  tick,
  setFilter,
  categoryList,
  removeCompleted,
}) => {
  return (
    <div>
      <ul className="my-list-group list-group " scroll="yes">
        {categoryList.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            removeListItem={removeListItem}
            tick={tick}
          />
        ))}
      </ul>
      {list && (
        <ToolBar
          setFilter={setFilter}
          categoryList={categoryList}
          list={list}
          removeCompleted={removeCompleted}
        />
      )}
    </div>
  )
}

const ListItem = ({ item, removeListItem, tick }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center ">
    <input
      className="form-check-input"
      type="checkbox"
      onChange={() => tick(item.id, item.done)}
      checked={item.done}
    />
    <div> {item.value}</div>
    <button
      onClick={() => removeListItem(item.id)}
      className="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      X
    </button>
  </li>
)

export default List
