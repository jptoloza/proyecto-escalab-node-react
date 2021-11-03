import {  NOTIFICATIONSADM } from "./NotificationsActions"

const initialState = {
  notifications: []
}

const NotificationsReducer = ( state = initialState, actions ) => {
  const { type, data } = actions
  let newState = {}

  switch (type) {

    case NOTIFICATIONSADM:
      newState = Object.assign(
        {}, 
        state, {
          notifications: data
        }
      )
      break


    default:
      newState = state
      break
  }
  return newState
}

export default NotificationsReducer
