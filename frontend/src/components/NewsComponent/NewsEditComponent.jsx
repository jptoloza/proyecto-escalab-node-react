import React, { useEffect, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import axios from '../../services/axios'
import { Alert, AlertTitle, Button, TextField, Typography } from '@mui/material'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import { Editor } from "@tinymce/tinymce-react";
import { useParams } from 'react-router-dom'



const NewsEditComponent = () => {
  const { id } = useParams();

  const dispatch = useDispatch()
  const [title, setTitle] = useState(null)
  const [image, setImage] = useState(null)  
  const [abstract, setAbstract] = useState(null)  
  const [externalurl, setExternalurl] = useState(null)  
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()



  const [formValid, setFormValid] = useState(false)
  async function handleSubmit() {
    const formData = {
      title,
      image,
      abstract,
      externalurl
    }
    setError(false)

    dispatch(showHideLoading(true))
    await axios.put(`/news/${id}`, formData)
    .then( response => {
      //const data = response.data.data
      dispatch(setSnackBar({msg: 'Noticia Actualizada.', show: true}))
      history.push('/admin/news')
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
    if (title && image && abstract && externalurl) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  },[title, image, abstract, externalurl])
 

  useEffect(() => {
    const getData = async () => {
      dispatch(showHideLoading(true))
      await axios.get(`/news/${id}`)
        .then( response => {
          const data = response.data.data
          setTitle(data.title)
          setImage(data.image)
          setAbstract(data.abstract)
          setExternalurl(data.externalurl)
        })
        .catch( error => {
          dispatch(setSnackBar({ msg: 'Noticia no existe', show: true}))
          history.push('/admin/news');
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
        Nueva Noticia
      </Typography>

      <form>
      <TextField
        error={title ? false : true} 
        label="Titulo" 
        value={title !== null ? title : ''}  
        onChange={(e) => setTitle(e.target.value)} 
        fullWidth
        margin="normal"
      />

      <TextField 
        error={image ? false : true} 
        label="URL Imagen" 
        value={image !== null ? image : ''}  
        onChange={(e) => setImage(e.target.value)} 
        fullWidth
        margin="normal"
      />


      <div>
        <Typography style={{padding: '15px', color: abstract === '' || abstract === null ? '#ff0000': ''}}>
          Resumen de la noticia
        </Typography>

        <div style={{ border: abstract === '' || abstract === null ? '1px solid #ff0000': ''}}>
        <Editor
          apiKey={process.env.REACT_APP_TYNY_API_KEY}
          value={abstract}
          init={{
            height: 500,
            menubar: false,
            branding: false,
            language: 'es'
          }}
          onEditorChange={(content, editor) => setAbstract(content)}
        />
        </div>

      </div>



      <TextField 
        error={externalurl ? false : true} 
        label="URL de la Fuente" 
        value={externalurl !== null ? externalurl : ''}  
        onChange={(e) => setExternalurl(e.target.value)} 
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

    </div>
  )
}


export default NewsEditComponent
