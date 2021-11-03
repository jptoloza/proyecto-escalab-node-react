import React, { useEffect, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import axios from '../../services/axios'
import { Alert, AlertTitle, Button, TextField, Typography } from '@mui/material'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import { Editor } from "@tinymce/tinymce-react";



const NotificationsAddComponent = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(null)
  const [notification, setNotification] = useState('')
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const [formValid, setFormValid] = useState(false)
  async function handleSubmit() {
    const formData = {
      title,
      notification,
    }
    setError(false)
    dispatch(showHideLoading(true))
    await axios.post(`/notifications`, formData)
    .then( response => {
      dispatch(setSnackBar({msg: 'Notificación Creada.', show: true}))
      history.push('/admin/notifications')
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
    if (title && notification) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  },[title, notification])
 





  return (
    <div style={{marginTop:'10px'}}>

      <Typography variant="h5" color="initial">
        Nueva Notificación
      </Typography>

      <form>
      <TextField
        error={title ? false : true} 
        label="Título" 
        id="title" 
        value={title !== null ? title : ''}  
        onChange={(e) => setTitle(e.target.value)} 
        fullWidth
        margin="normal"
      />



      <div>
        <Typography style={{padding: '15px', color: notification === '' ? '#ff0000': ''}}>
          Ingrese texto de la notificación
        </Typography>

        <div style={{ border: notification === '' ? '1px solid #ff0000': ''}}>
        <Editor
          apiKey={process.env.REACT_APP_TYNY_API_KEY}
          value={notification}
          init={{
            height: 500,
            menubar: false,
            branding: false,
            language: 'es'
          }}
          onEditorChange={(content, editor) => setNotification(content)}
        />
        </div>

      </div>



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

export default NotificationsAddComponent
