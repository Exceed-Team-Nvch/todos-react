import React, { useState } from 'react'
import './App.css'

const InputBar = ({ addListItem, toCompleted }) => {
  const [value, setValue] = useState('')

  const ifEnter = (event) => {
    if (event.key === 'Enter') {
      setValue(event.target.value)
      addListItem(value, Date.now())
      setValue('')
    }
  }

  return (
    <div className="input-group mb-1 col-lg-5 justify-content-between ">
      <button
        onClick={() => {
          toCompleted()
          setValue('')
        }}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        V
      </button>
      <input
        className="input"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => ifEnter(e)}
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        aria-describedby="button-addon2"
        value={value}
      />
    </div>
  )
}

export default InputBar
