import { CHANGEREADNOTIFICATION, LISTNOTIFICATIONS, LOADING, NOTIFICATIONS, NOTIFICATIONSICON, SNACK, SOCKET } from "./NavActions"

const initialState = {
  loading: false,
  socket: null,
  notifications: null,
  notificationsIcon: true,
  snackbar: {},
  listnotifications: [],
  listnotificationscurrentpage: 0,
  listnotificationsnextpage: 0
  
}

const NavReducer = ( state = initialState, actions ) => {
  const { type, data } = actions
  let newState = {}

  switch (type) {

    case LOADING:
      newState = Object.assign(
        {}, 
        state, {
          loading: data
        }
      )
      break

    case SOCKET:
      newState = Object.assign(
        {}, 
        state, {
          socket: data
        }
      )
      break

    case NOTIFICATIONS:
      newState = Object.assign(
        {}, 
        state, {
          notifications: data
        }
      )
      break
    
    case NOTIFICATIONSICON:
      newState = Object.assign(
        {}, 
        state, {
          notificationsIcon: data
        }
      )
      break

    case SNACK:
        newState = Object.assign(
          {}, 
          state, {
            snackbar: data
          }
        )
        break



    case LISTNOTIFICATIONS:
      let current = 0
      let next = 0
      let notifications = state.listnotifications
      if (state.listnotificationscurrentpage === 0) {
        current = data.page
        next = data.nextPage   
      } else {
        if (state.listnotificationscurrentpage !== state.listnotificationsnextpage){
          current = data.page
          next = data.nextPage
        } else {
          current = state.listnotificationscurrentpage
          next = state.listnotificationsnextpage   
        }
      }      
      data.docs.forEach(element => {
        if (element.notificationid !== null) {
          notifications.push({
            id: element._id,
            title: element.notificationid.title,
            notification: element.notificationid.notification,
            read: element.read,
            createdAt: element.createdAt
          })
        }
      })

      notifications = [...new Map(notifications.map(item => [JSON.stringify(item), item])).values()]

      newState = Object.assign(
        {},
        state, {
          listnotifications: notifications,
          listnotificationscurrentpage: current,
          listnotificationsnextpage: next
        }
      )
      break



      
    case CHANGEREADNOTIFICATION:
      let listnotifications = state.listnotifications
      listnotifications = listnotifications.map(e => {
        if (e.id === data) {
          e.read = true
        }
        return e
      })
      
      newState = Object.assign(
        {},
        state, {
          listnotifications: listnotifications
        }
      )
      break;

    default:
      newState = state
      break
  }
  return newState
}

export default NavReducer
