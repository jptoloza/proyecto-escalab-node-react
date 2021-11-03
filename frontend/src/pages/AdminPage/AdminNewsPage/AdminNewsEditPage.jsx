import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import NewsEditComponent from '../../../components/NewsComponent/NewsEditComponent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AdminNewsEditPage = () => {
  return (
    <div>
      <Typography variant="h3" color="initial">
        Noticias
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/news">
          <Button  variant="outlined" size="small" startIcon={<ArrowBackIosIcon />}>
            Noticias
          </Button>
        </Link>
        <NewsEditComponent />
      </Box>
    </div>
  )
}

export default AdminNewsEditPage
