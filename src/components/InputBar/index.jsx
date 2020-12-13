import React, { useState } from 'react'
import '../../App.css'
import { store } from '../../store'
import { addItem } from '../../actions'
import { connect } from 'react-redux'
import { fetchItem } from '../../store'

const InputBar = ({ toCompleted, addItem, list }) => {
  const [value, setValue] = useState('')

  const getInput = (event) => {
    if (!event.target.value.trim()) {
      event.target.className = 'alert-form-control form-control'
    } else {
      event.target.className = 'form-control'
      return true
    }  
  }

  // const eventEnter = (event) => {
  //   if (event.key === 'Enter') {
  //     if (getInput(event)) {
  //       setValue(event.target.value)
  //       const id = Date.now()
  //       store.dispatch(
  //         addItem({
  //           id,
  //           value,
  //           done: false,
  //         })
  //       )
  //       setValue('')
  //     }
  //   }
  // }
  const eventEnter = (event) => {
    if (event.key === 'Enter') {
      if (getInput(event)) {
        fetchItem({text: event.target.value, done:false})
        setValue('')
      }
    }
  }


  return (
    <div className='input-group mb-1 col-lg-5 justify-content-between '>
      <button
        onClick={() => {
          toCompleted()
          setValue('')
        }}
        className='custom-btn'
        type='button '
        id='button-addon2'>
        &#9745;
      </button>
      <input
        onChange={(e) => {
          setValue(e.target.value)
          getInput(e)
        }}
        onKeyPress={(e) => eventEnter(e)}
        type='text'
        className='form-control'
        placeholder='What needs to be done?'
        aria-describedby='button-addon2'
        value={value}
      />
    </div>
  )

}
// 
const mapStateToProps = (state) => {
  return {
    list : state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (data)=> dispatch(addItem(data))
  }
}

// export default InputBar
export default connect(mapStateToProps)(InputBar)