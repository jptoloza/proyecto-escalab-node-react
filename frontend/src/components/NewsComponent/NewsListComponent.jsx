import React, { useEffect, useState, useRef } from 'react'
import axios from '../../services/axios'
import { DataGrid } from '@mui/x-data-grid'
import { setNews } from '../../store/News/NewsActionsCreator'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import SearchToolBarComponent from '../SearchToolBarComponent/SearchToolBarComponent'
import EscapeRegExp from '../../helpers/EscapeRegExp'
import { Link } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DialogComponent from '../DialogComponent/DialogComponent'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import Moment from 'react-moment';


const NewsListComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const news = useSelector( state => state.news)
  
  const dispatch = useDispatch()

  const [deleteNews, setDeleteNews] = useState(false)
  const [deleteNewsId, setDeleteNewsId] = useState()
  const tempGetData = useRef()

  

 


  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(EscapeRegExp(searchValue), 'i');
    const filteredRows = news.news.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };


  const handleDeleteNews = async (id) => {
    handldeCloseDialog()
    dispatch(showHideLoading(true))
    setLoading(true)
    await axios.delete(`/news/${id}`)
      .then( response => {
        dispatch(setNews([]))
        getData()
        dispatch(setSnackBar({msg: 'Noticia Eliminado.', show: true}))
      })
      .catch( error => {
      })
      .finally(() => {
        setLoading(false)
        dispatch(showHideLoading(false))

      })
  }

  const openDialog = (id) => {
    setDeleteNewsId(id)
    setDeleteNews(true)
  }

  const handldeCloseDialog = () => {
    setDeleteNews(false)
  }

  const columns = [
    { field: 'id',
      headerName: 'Acción',
      width: '100', 
      filterable: false,
      type: 'actions',
      renderCell: (params) => (
        <div>
          <Link to={`/admin/news/edit/${params.value}`}>
            <IconButton aria-label="delete" size="small">
              <EditIcon size="small" sx={{height: '16px !important'}}/>
            </IconButton>
        </Link>
        <IconButton 
          aria-label="delete" 
          size="small" 
          onClick={() => openDialog(params.value)}
        >
          <DeleteForeverIcon size="small" sx={{height: '20px !important'}} />
        </IconButton>
        </div>
      ),
    },
    { field: 'createdAt', headerName: 'Fecha', width: '200', 
        renderCell: (params) => (
          <Moment format="DD/MM/YYYY hh:mm">
            {params.value}
          </Moment>
        )
    },
    { field: 'title', headerName: 'Titulo', minWidth: '100', flex: 1}
  ]



  const getData = async() => {
    setLoading(true)
    await axios.get('/news?paginate=0')
      .then( response => {
        const docs = response.data.data.docs
        const newRows = docs.map( (e) => {
          return {
            id: e._id,
            title: e.title,
            createdAt: e.createdAt
          }
        })
        dispatch(setNews([]))
        dispatch(setNews(newRows))
        setRows(newRows)
      })
      .catch( error => {
      })
      .finally(() => {
        setLoading(false)
      })
  }

  tempGetData.current = getData


  useEffect( () => {
    tempGetData.current()
  }, [])

  useEffect(() => {
    setRows(rows);
  }, [rows]);






  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <SearchToolBarComponent
          style={{marginTop: '10px', marginBottom: '100px !important', width: '300px'}}
          value={searchText}
          onChange={(event) => requestSearch(event.target.value)}
          clearSearch={() => requestSearch('')}
        />
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          disableColumnMenu={true}
          pagination={true}
          density="compact"
          rowsPerPageOptions={[10]}
          pageSize={10}
          disableSelectionOnClick={true}
          onPageChange={getData}
        />
      </div>

      { deleteNews && (
        <DialogComponent 
          id={deleteNewsId}
          open={deleteNews} 
          handleClose={handldeCloseDialog}
          handleSubmit={() => handleDeleteNews(deleteNewsId)}
          title={'Alerta'}
          message={'Esta seguro de eliminar el registro ?'}   
        />
      )}

    </>
  )
}


export default NewsListComponent

