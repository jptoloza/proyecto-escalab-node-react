import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import validateRut from '../../helpers/ValidateRut'
import validateEmail from '../../helpers/ValidateEmail'
import axios from '../../services/axios'
import InputTextRut from '../InputTextRutComponent/InputTextRutComponent'
import { Alert, AlertTitle, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import { Box } from '@mui/system'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import SaveIcon from '@mui/icons-material/Save'




const UserEditComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)  
  const [rut, setRut] = useState(null)
  const [checkRut, setCheckRut] = useState(true)
  const [email, setEmail] = useState('')
  const [checkEmail, setCheckEmail] = useState(true)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [activeMsg, setActiveMsg] = useState('Seleccione Estado')
  const [active, setActive] = useState(null)
  const history = useHistory()



  const validarRut = (_rut) => {
    setRut(_rut)
    if (validateRut(_rut)){
      setCheckRut(false)
    } else {
      setCheckRut(true)
    }
  }

  const validarEmail = (email) => {
    setEmail(email)
    if (validateEmail(email)){      
      setCheckEmail(false)
    } else {
      setCheckEmail(true)
    }
  }



  const [formValid, setFormValid] = useState(false)
  async function handleSubmit() {
    const [ruts, dv] = rut.split(/-/)
    const formData = {
      firstname,
      lastname,
      rut: ruts,
      dv,
      email,
      active
    }
    setError(false)
    dispatch(showHideLoading(true))
    await axios.put(`/users/${id}`, formData)
    .then( response => {
      dispatch(setSnackBar({msg: 'Usuario Actualizado.', show: true}))
      history.push('/admin/users')
    })
    .catch((error) => {
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
    if (firstname && lastname && rut && email && active!==null && !checkEmail && !checkRut) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  },[firstname, lastname, rut, email, active, checkEmail, checkRut])
 
  useEffect(() => {
    const getData = async () => {
      dispatch(showHideLoading(true))
      await axios.get(`/users/${id}`)
        .then( response => {
          const data = response.data.data
          setFirstname(data.firstname)
          setLastname(data.lastname)
          const rut = `${data.rut}-${data.dv}`
          validarRut(rut)
          validarEmail(data.email)
          setActive(data.active)
          setActiveMsg('')
        })
        .catch( error => {
          dispatch(setSnackBar({ msg: 'Usuario no existe', show: true}))
          history.push('/admin/users');
        })
        .finally( () => {
          dispatch(showHideLoading(false))
        })
    }

    getData()

  }, [dispatch, id, history])




  return (
    <div style={{marginTop:'10px'}}>
      <Typography variant="h5" color="initial">
        Editar Usuario
      </Typography>
     

      <form>
      <TextField
        error={firstname ? false : true} 
        label="Nombre" 
        id="firstname" 
        value={firstname !== null ? firstname : ''}  
        onChange={(e) => setFirstname(e.target.value)} 
        fullWidth
        margin="normal"
      />

      <TextField 
        error={lastname ? false : true} 
        label="Apellido" 
        id="lastname" 
        value={lastname !== null ? lastname : ''}  
        onChange={(e) => setLastname(e.target.value)} 
        fullWidth
        margin="normal"
      />

      <TextField 
        error={checkRut} 
        label="R.U.T." 
        id="rut" 
        value={rut !== null ? rut : ''}
        onChange={(e) => validarRut(e.target.value.toUpperCase())}
        fullWidth
        InputProps={{
          inputComponent: InputTextRut,
        }}
        margin="normal"
      />   

      <TextField 
        error={checkEmail} 
        label="Correo Eletrónico" 
        id="email" 
        value={email !== null ? email : ''}
        onChange={(e) => validarEmail(e.target.value)}
        fullWidth
        margin="normal"
      />   



      <Box sx={{ width: '100%'}}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Usuario Activo</FormLabel>
          <RadioGroup 
            row 
            aria-label="active" 
            name="row-radio-buttons-group"
            value={active}
            onChange={(e) => { 
              e.preventDefault(); 
              setActive(e.target.value)
              setActiveMsg('')
            }}  
          >
            <FormControlLabel value="true" control={<Radio />} label="Sí" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
          <FormHelperText style={{color:'#ff0000'}} color="error">{activeMsg}</FormHelperText>
        </FormControl>
      </Box>


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

    </div>  
  )
}




export default UserEditComponent
