import React from 'react'
import Typography from '@mui/material/Typography'
import ImageJPG from '../../assets/images/humor-servercaido.jpg'

const NoMatchPage = () => {
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant="h2" color="initial" style={{textAlign: "center"}}>
        404 - Not Found
      </Typography>
      <Typography variant="h6" color="initial" style={{textAlign: "center"}}>
        Página no encontrada
      </Typography>
      <img style={{marginTop:"20px"}} src={ImageJPG} alt="Server Caído" />
    </div>
  )
}

export default NoMatchPage
