const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_COMPLETED = 'REMOVE_ALL'

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
  removeItem,
  addItem,
  removeCompleted,
}
