const GET_ITEMS = 'GET_ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_COMPLETED = 'REMOVE_ALL'

const getItems = (items) => {
  return {
    type: GET_ITEMS,
    payload: items,
  }
}

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}

const removeCompleted = () => {
  return {
    type: REMOVE_COMPLETED,
  }
}

export {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_COMPLETED,
  GET_ITEMS,
  removeItem,
  addItem,
  removeCompleted,
  getItems,
}
