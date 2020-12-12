import { createStore } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, REMOVE_COMPLETED } from '../actions'
const todos = JSON.parse(localStorage.getItem('Todos'))
const initialState = { list: todos ? todos : [] }

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            value: action.payload.value,
            done: action.payload.done,
          },
        ],
      }
    case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      }
    case REMOVE_COMPLETED:
      return {
        ...state,
        list: state.list.filter((todo) => !todo.done),
      }
    default:
      return state
  }
}

export const store = createStore(list)
