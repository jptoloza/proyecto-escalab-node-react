import React from 'react'
import './LoadingComponent.scss'
import Typography from '@mui/material/Typography'
import LoaderSVG from '../../assets/images/loading.svg'

const Loading = () => {
  return (
    <div>
      <div className="loading-text">
        <img src={LoaderSVG} alt="Loading"/>
        <Typography variant="body1" color="initial" >
          Cargando
        </Typography>
      </div>
      <div className="loading"></div>
    </div>
  )
}
export default Loading
