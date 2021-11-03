import {  USERS } from "./UsersActions"

const initialState = {
  users: []
}

const UsersReducer = ( state = initialState, actions ) => {
  const { type, data } = actions
  let newState = {}

  switch (type) {

    case USERS:
      newState = Object.assign(
        {}, 
        state, {
          users: data
        }
      )
      break


    default:
      newState = state
      break
  }
  return newState
}

export default UsersReducer
