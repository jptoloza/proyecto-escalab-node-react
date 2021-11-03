import { SIGN_IN } from "./AuthActions"
import jwt_decode from 'jwt-decode'

const initialState = {
  uid: '',
  email: '',
  name: '', 
  firstname: '',
  lastname: '',
  foto: '',
  exp: '',
  token: window.localStorage.getItem('_token') ? window.localStorage.getItem('_token') : '',
}

const AuthReducer = ( state = initialState, actions ) => {
  const { type, data } = actions;
  switch (type) {

    case SIGN_IN:
      const decode = jwt_decode(data)
    
      const foto = decode.foto.includes('http') ? decode.foto : `${process.env.REACT_APP_API_HOST}${decode.foto}?token=${data}`

      return Object.assign(
        {}, 
        state, {
          uid: decode.uid,
          email: decode.email,
          name: decode.name,
          firstname: decode.firstname,
          lastname: decode.lastname,
          rut: decode.rut,
          dv: decode.dv,
          foto: foto,
          exp: decode.exp,
          roles: decode.roles,
          token: data
        }
      )
    
    default:
      return state
  }
}

export default AuthReducer
