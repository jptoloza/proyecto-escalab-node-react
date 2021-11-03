import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import NotificationsAddComponent from '../../../components/NotificationsComponent/NotificationsAddComponent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AdminNotificatiosAddPage = () => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Notificaciones
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/notifications">
          <Button  variant="outlined" size="small" startIcon={<ArrowBackIosIcon />}>
            Notificaciones
          </Button>
        </Link>
        <NotificationsAddComponent />
      </Box>
    </>
  )
}

export default AdminNotificatiosAddPage
