import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import UserAddComponent from '../../../components/UsersComponent/UserAddComponent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AdminUsersAddPage = () => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Usuarios
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/users">
          <Button  variant="outlined" size="small" startIcon={<ArrowBackIosIcon />}>
            Usuarios
          </Button>
        </Link>
        <UserAddComponent />
      </Box>
    </>
  )
}

export default AdminUsersAddPage
