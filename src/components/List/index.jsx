// import React from 'react'
import '../../App.css'
import ListItem from '../ListItem'
import { fetchItems } from '../../store'
import { getItems } from '../../actions'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const List = ({ list, getItems }) => {
  useEffect(() => {
    fetchItems().then((data) => {
      getItems(data)
    })
  }, [])
  return (
    <div>
      <ul className='my-list-group list-group ' scroll='yes'>
        {list.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (data) => dispatch(getItems(data)),
  }
}

const mapStateToProps = (state) => {
  console.log(1232133, state)
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
