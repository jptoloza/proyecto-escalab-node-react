import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import NotificationsListComponent from '../../../components/NotificationsComponent/NotificationsListComponent'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'

const AdminNotificatiosPage = ({ ...props }) => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Notificaciones
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/notifications/add">
          <Button  variant="outlined" size="small" startIcon={<AddCircleOutlineIcon />}>
            Notificación
          </Button>
        </Link>
        <NotificationsListComponent />
      </Box>
    </>
  )
}

export default AdminNotificatiosPage
