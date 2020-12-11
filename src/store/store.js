import { createStore } from 'redux'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_COMPLETED = 'REMOVE_ALL'
const CHANGE_TICK = 'CHANGE_TICK'

// let store = createStore(list)
// const [list, setList] = useState([])
// const [filter, setFilter] = useState('All')

//   const addListItem = (value, id, e, done = false) => {
// let copyList = [...list]
// copyList.push({ value, id, done })
// setList(copyList)
//   }
//actions
//! actions
export const addItem = (item) => {
  console.log('init addItem')
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}

export const removeCompleted = () => {
  return {
    type: REMOVE_COMPLETED,
  }
}

//! state

const todos = JSON.parse(localStorage.getItem('Todos'))
const initialState = { list: todos ? todos : [] }

//! Reductors -> set a new state

const list = (state = initialState, action) => {
  console.log('init reduct')
  console.log(action.payload)
  console.log(state.list)
  console.log(state)
  let newState = {}
  let newList = []
  console.log(action.id)
  console.log(action.type)
  switch (action.type) {
    case ADD_ITEM:
      newList = state.list.concat([
        {
          id: action.payload.id,
          value: action.payload.value,
          done: action.payload.done,
        },
      ])
      newState.list = newList
      console.log(newState)
      return newState

    case REMOVE_ITEM:
      newList = state.list.filter((item) => item.id !== action.payload)
      console.log(newList)
      newState.list = newList
      return newState
    case REMOVE_COMPLETED:
      newList = state.list
      newState.list = newList.filter((todo) => !todo.done)
      console.log(newState)
      return newState
    default:
      console.log('default')
      console.log(state)

      return state
  }
}

export const store = createStore(list)
