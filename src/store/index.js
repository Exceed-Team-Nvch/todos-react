import { createStore } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, REMOVE_COMPLETED, GET_ITEMS } from '../actions'
// const todos = JSON.parse(localStorage.getItem('Todos')) //! --------------------
const API_GET_ITEMS = 'http://127.0.0.1:8000/api/todos/todo/'
const API_CREATE_ITEM = 'http://127.0.0.1:8000/api/todos/todo/create/'


export const fetchItems = async () => {
  const res = await fetch(API_GET_ITEMS)
  return res.json()
}

export const fetchItem = async (data={}) => {
  console.log(JSON.stringify(data))
  const res = await fetch(API_CREATE_ITEM, {
    method: 'POST',
    config: { headers: {
      'Accept': 'application/json',
      'accepts': 'application/json',
      'ContentType': 'application/json',
      
      // 'Media-type': 'application/json'
      'Content-Type': 'application/json',
      'Vary': 'Accept'

    }},
    body: JSON.stringify(data),

    dataType: 'json',
  })

  return res.json()
}





// const initialState = { list: todos ? todos : [] } //! server
// const todos = fetchItems().then((data) => store.dispatch(getItems(data)))
const initialState = { list: [] }

const list = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      console.log(action.payload)
      return { ...state, list: action.payload }
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
