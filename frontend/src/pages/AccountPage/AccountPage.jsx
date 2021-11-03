import React, { useEffect, useState } from 'react'
import { Alert, AlertTitle, Avatar, Button, Grid, LinearProgress, TextField, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import firebase from '../../services/firebase'
import jwt_decode from 'jwt-decode'
import validateRut from '../../helpers/ValidateRut.js'
import validateEmail from '../../helpers/ValidateEmail'
import SaveIcon from '@mui/icons-material/Save'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import axios from '../../services/axios'
import { signIn } from '../../store/Auth/AuthActionsCreator'
import InputTextRutComponent from '../../components/InputTextRutComponent/InputTextRutComponent'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'




const AccountPage = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [firstname, setFirstname] = useState(auth.firstname)
  const [lastname, setLastname] = useState(auth.lastname)  
  const [rut, setRut] = useState(`${auth.rut}-${auth.dv}`)
  const [inputRut, setInputRut] = useState(rut)
  const [checkRut, setCheckRut] = useState(false)
  const [email, setEmail] = useState(auth.email)
  const [inputEmail, setInputEmail] = useState(email)
  const [checkEmail, setCheckEmail] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const validarRut = (_rut) => {
    setInputRut(_rut)
    if (validateRut(_rut)){
      setCheckRut(false)
      setRut(_rut)
    } else {
      setRut('')
      setCheckRut(true)
      setInputRut(_rut)
    }
  }

  const validarEmail = (email) => {
    setInputEmail(email)
    if (validateEmail(email)){
      setCheckEmail(false)
      setEmail(email)
    } else {
      setEmail('')
      setCheckEmail(true)
      setInputEmail(email)
    }
  }

 
  const [progress, setProgress] = useState(0)
  const handleImageChange = (e) =>{
    setProgress(0)
    if(e.target.files[0]){
      const image = e.target.files[0]
      const extension= (/[.]/.exec(image.name)) ? /[^.]+$/.exec(image.name) : 'undefined';
      const filename = `imagenes/foto/${auth.uid}.${extension}`
      const storageRef = firebase.storage().ref(filename).put(image)
      storageRef.on('state_changed',
        snapshot => {
          setProgress(Math.round((snapshot.bytesTransferred/snapshot.totalBytes))*100)
        },
        err => {},
        () => {
          dispatch(showHideLoading(true))
          storageRef.snapshot.ref.getDownloadURL()
            .then( async (url) => {
              await uploadImage(url)
            })
            .finally( () => {
              dispatch(showHideLoading(false))
            })
        }
      )
    }
  }

  const uploadImage = async (foto) => {
    const url = `/users/${auth.uid}/account`
    await axios.post(url, { foto })
      .then(response => {
        const accessToken = response.data.data.access_token
        const jwt = jwt_decode(accessToken)
        const currentTime = Math.floor(Date.now() / 1000)
        if (currentTime < jwt.exp) {
          window.localStorage.setItem('_token', accessToken)
          dispatch(signIn(accessToken))
        }
      })
      .catch(error => {
      })
  }

  const [formValid, setFormValid] = useState(false)
  async function handleSubmit() {
    const [ruts, dv] = rut.split(/-/)
    const formData = {
      firstname,
      lastname,
      rut: ruts,
      dv,
      email
    }
    //socket.emit('msg', { msg: "hola desde el cliente"})
    dispatch(showHideLoading(true))
    await axios.put(`/users/${auth.uid}/account`, formData)
    .then( response => {
      const data = response.data.data
      if (data.logout === 1) {
        window.localStorage.removeItem('_token');
        window.location = '/';
      } else {
        const accessToken = data.access_token
        window.localStorage.setItem('_token', accessToken)
        dispatch(signIn(accessToken))
      }
    })
    .catch(error => {
      if (error.response.data.data.messages) {
        setErrorMsg(error.response.data.data.messages)
      } else {
        setErrorMsg(error.message)
      }
      setError(true)
    })
    .finally(()=> {
      dispatch(showHideLoading(false))
    })
  }

  useEffect(() => {
    document.title = "Mi Cuenta"
  }, [])

  useEffect(() => {
    if (firstname && lastname && rut && email) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  },[firstname, lastname, rut, email])
 

  return (
    <>
      <Typography variant="h3" color="initial">
        Mi Cuenta
      </Typography>
    
      <Grid container spacing={4} className="mt-20">
        <Grid item xs={12} md={4} style={{textAlign: "center"}}>
            <Avatar alt={auth.name} src={auth.foto} sx={{ width: 200, height: 200, margin: '0 auto' }}/>
            <form>
              <input type="file" style={{display:"none"}} id="newImage" onChange={handleImageChange} accept="image/*"/>
              <AddAPhotoIcon onClick={() => document.querySelector('#newImage').click()} style={{cursor:"pointer",marginTop:"10px",marginBottom:"10px"}}/>
              <LinearProgress variant="determinate" value={progress} color="error" />
            </form>
        </Grid>

        <Grid item xs={12} md={8}>
          <form>

          <TextField 
            error={firstname ? false : true} 
            label="Nombre" 
            id="firstname" 
            value={firstname}  
            onChange={(e) => setFirstname(e.target.value)} 
            fullWidth
            margin="normal"
          />

          <TextField 
            error={lastname ? false : true} 
            label="Apellido" 
            id="lastname" 
            value={lastname}  
            onChange={(e) => setLastname(e.target.value)} 
            fullWidth
            margin="normal"
          />

          <TextField 
            error={checkRut} 
            label="R.U.T." 
            id="rut" 
            value={inputRut}
            onChange={(e) => validarRut(e.target.value.toUpperCase())}
            fullWidth
            InputProps={{
              inputComponent: InputTextRutComponent,
            }}
            margin="normal"
          />   

          <TextField 
            error={checkEmail} 
            label="Correo Eletrónico" 
            id="email" 
            value={inputEmail}
            onChange={(e) => validarEmail(e.target.value)}
            fullWidth
            margin="normal"
          />   


          { error && (
            <Alert severity="error" style={{textAlign:"left", marginTop: "20px"}}>
              <AlertTitle>Error</AlertTitle>
              { errorMsg } 
            </Alert>
          )}

          <Button
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
            variant="contained"
            className={ `mt-20 ${formValid ? 'buttonPrimary' : ''}` }
            disabled={!formValid}
          >
            Guardar
          </Button>

          </form>
        </Grid>
      </Grid>
    
    
    </>
  )
}

export default AccountPage
