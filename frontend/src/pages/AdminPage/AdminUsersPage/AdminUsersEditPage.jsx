import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import UserEditComponent from '../../../components/UsersComponent/UserEditComponent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AdminUsersEditPage = () => {
  return (
    <div>
      <Typography variant="h3" color="initial">
        Usuarios
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/users">
          <Button  variant="outlined" size="small" startIcon={<ArrowBackIosIcon />}>
            Usuarios
          </Button>
        </Link>
        <UserEditComponent />
      </Box>
    </div>
  )
}

export default AdminUsersEditPage
