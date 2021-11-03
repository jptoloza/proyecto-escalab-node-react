import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import NewsAddComponent from '../../../components/NewsComponent/NewsAddComponent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AdminNewsAddPage = () => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Noticias
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/news">
          <Button  variant="outlined" size="small" startIcon={<ArrowBackIosIcon />}>
            Noticias
          </Button>
        </Link>
        <NewsAddComponent />
      </Box>
    </>
  )
}

export default AdminNewsAddPage
