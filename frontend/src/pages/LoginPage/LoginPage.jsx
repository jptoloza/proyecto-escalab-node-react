import jwt_decode from 'jwt-decode'
import React,{ useEffect, useState } from 'react'
import axios from '../../services/axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import logoGoogle from '../../assets/images/Google_icon.svg'
import { signIn } from '../../store/Auth/AuthActionsCreator'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import { Grid, Typography, Alert, AlertTitle, Link } from '@mui/material'
import RemoteImage from '../../assets/images/remote.svg'
import './LoginPage.scss'

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  useEffect(() => {
    window.localStorage.removeItem('_token')
  }, [])

  const responseGoogle = async (res) => {
    if (!res.error) {
      const form = {
        token: res.tokenId
      }
      dispatch(showHideLoading(true))
      await axios.post('/auth', form)
        .then(response => response.data)
        .then(response => {
          const accessToken = response.data.access_token
          const jwt = jwt_decode(accessToken)
          const currentTime = Math.floor(Date.now() / 1000)
          if (currentTime < jwt.exp) {
            window.localStorage.setItem('_token', accessToken)
            dispatch(signIn(accessToken))
            history.push('/')
          } else {
            throw new Error('Token no válido.')
          }
        })
        .catch((e) => {
          if (e.response) {
            setErrorMsg(e.response.data.data.messages)
          } else {
            if (typeof(e) == 'object') {
              setErrorMsg(e.message)
            } else {
              setErrorMsg(error)
            }
          }
          setError(true)
        })
        .finally(()=> {
          dispatch(showHideLoading(false))
        })
    } else {
    }
  }

  return (
    <>
    <Grid  className="login-container" container spacing={0} >
      <Grid item xs={12} sm={12} md={4} xl={4} className="login-column-left">
        <img src={RemoteImage} alt="" style={{maxWidth: "100%"}} />
      </Grid>


      <Grid item xs={12} sm={12} md={4} xl={4} className="login-column-right">
          <Typography variant="h4" color="initial" className="login-title">
            AlumnApp
          </Typography>
         
          <Typography variant="body1" className="login-body-color">
            Para iniciar sesión haga clic en el botón "acceder con mi cuenta Gmail".
          </Typography>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <button 
              onClick={renderProps.onClick} 
              disabled={renderProps.disabled} 
              className="login-buttonLogin">
              <img src={logoGoogle} alt="Logo Mat" className="login-logoGoole" />              
              Acceder con su Cuenta Gmail
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          prompt="consent"
        />

        { error && (
          <Alert severity="error" style={{textAlign:"left", marginTop: "20px"}}>
            <AlertTitle>Error</AlertTitle>
            { errorMsg} 
          </Alert>
        )}

        <Alert severity="info" style={{textAlign:"left", marginTop: "20px"}}>
          <AlertTitle>Soporte</AlertTitle>
          Para obtener ayuda haga <Link href="/soporte">clic aquí</Link>.
        </Alert>

      </Grid>

      <Grid item xs={12} sm={12} md={12} xl={12} style={{textAlign:"center"}}>
      <Typography variant="body1" className="login-body-color">
        2021 &copy;Alumn-app.com 
      </Typography>
    </Grid>

    </Grid>

    </>
  )
}

export default LoginPage

