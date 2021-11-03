const validateJwt = require('../helpers/validateJwt')
const { userOnline, userDisconnected } = require('../sockets/socketsHelpers')
const socketIo = require('socket.io');

class Sockets {

  constructor(server) {
    this.io = socketIo(server)
    this.socketEvents()    
  } 
  
  emiter(room, event, body) {
    if (body){
      if (room) {
        this.io.to(room).emit(event, body)
      } else {
        this.io.emit(event, body)
      }
    }
  }


  socketEvents() {

    this.io.on('connection', async (socket) => {
      const token = socket.handshake.query.token
      const uid = validateJwt(token)
      if (!uid) {
        return socket.disconnect()
      }
      await userOnline(uid);
      socket.join('notifications')

      socket.on('msg', (response) => {
        console.log(response)
      })

      socket.on('disconnect', async (response) => {
        await userDisconnected(uid)
      })
    })

  }

}
  
module.exports = Sockets
  