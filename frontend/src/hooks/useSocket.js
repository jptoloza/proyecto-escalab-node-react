import { useDispatch, useSelector } from 'react-redux'
import io from 'socket.io-client'
import { setSocket } from '../store/Nav/NavActionsCreator'

export const useSocket = () => {
  const socket = useSelector(state => state.nav.socket)
  const dispatch = useDispatch()
  
  const connectSocket = () => {
    const token = localStorage.getItem('_token')
    const socketTemp = io.connect( process.env.REACT_APP_SOCKET_HOST, { 
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        token
      }
    })
    dispatch(setSocket(socketTemp))
  }
  
  const disconnectSocket = () => {
    socket?.disconnect()
    dispatch(setSocket(null))
  }
  
  return {
    socket,
    connectSocket,
    disconnectSocket
  }
}
