import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import NewsListComponent from '../../../components/NewsComponent/NewsListComponent'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'

const AdminNewsPage = ({ ...props }) => {
  return (
    <>
      <Typography variant="h3" color="initial">
        Noticias
      </Typography>
      <Box sx={{ width: '100%'}}>
        <Link to="/admin/news/add">
          <Button  variant="outlined" size="small" startIcon={<AddCircleOutlineIcon />}>
            Noticia
          </Button>
        </Link>
        <NewsListComponent />
      </Box>
    </>
  )
}

export default AdminNewsPage
