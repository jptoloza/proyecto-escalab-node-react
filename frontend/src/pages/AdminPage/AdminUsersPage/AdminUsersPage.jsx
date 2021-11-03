import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import UsersListComponent from '../../../components/UsersComponent/UsersListComponent'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'

const AdminUsersPage = ({ ...props }) => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Usuarios
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/users/add">
          <Button  variant="outlined" size="small" startIcon={<AddCircleOutlineIcon />}>
            Usuario
          </Button>
        </Link>
        <UsersListComponent />
      </Box>
    </>
  )
}

export default AdminUsersPage
