import React, { useEffect, useState, useRef } from 'react'
import axios from '../../services/axios'
import { DataGrid } from '@mui/x-data-grid'
import { setNotifications } from '../../store/Notifications/NotificationsActionsCreator'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import SearchToolBarComponent from '../SearchToolBarComponent/SearchToolBarComponent'
import EscapeRegExp from '../../helpers/EscapeRegExp'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DialogComponent from '../DialogComponent/DialogComponent'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import Moment from 'react-moment';


const NotificationsListComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const notifications = useSelector( state => state.notifications)  
  const dispatch = useDispatch()
  const [deleteNotifications, setDeleteNotifications] = useState(false)
  const [deleteNotificationsId, setDeleteNotificationsId] = useState()
  const tempGetData = useRef()

  
  
  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(EscapeRegExp(searchValue), 'i');  
    const filteredRows = notifications.notifications.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };


  const handleDeleteNotifications = async (id) => {
    handldeCloseDialog()
    dispatch(showHideLoading(true))
    setLoading(true)
    await axios.delete(`/notifications/${id}`)
      .then( response => {
        dispatch(setNotifications([]))
        getData()
        dispatch(setSnackBar({msg: 'Notificación Eliminada.', show: true}))
      })
      .catch( error => {
      })
      .finally(() => {
        setLoading(false)
        dispatch(showHideLoading(false))

      })
  }

  const openDialog = (id) => {
    setDeleteNotificationsId(id)
    setDeleteNotifications(true)
  }

  const handldeCloseDialog = () => {
    setDeleteNotifications(false)
  }

  const columns = [
    { field: 'id',
      headerName: 'Acción',
      width: '100', 
      filterable: false,
      type: 'actions',
      renderCell: (params) => (
        <div>
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
    { field: 'title', headerName: 'Título', align: 'center', headerAlign: 'center'},
    { field: 'notification', headerName: 'Notificación', flex: 1 },
    { field: 'createdAt', headerName: 'Fecha', width: '200', 
      renderCell: (params) => (
        <Moment format="DD/MM/YYYY hh:mm">
        {params.value}
      </Moment>
      )
    },
  ]



  const getData = async() => {
    setLoading(true)
    await axios.get('/notifications?paginate=0')
      .then( response => {
        const docs = response.data.data.docs
        const newRows = docs.map( (e) => {
          return {
            id: e._id,
            title: e.title,
            notification: e.notification,
            createdAt: e.createdAt
          }
        })
        dispatch(setNotifications([]))
        dispatch(setNotifications(newRows))
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

      { deleteNotifications && (
        <DialogComponent 
          id={deleteNotificationsId}
          open={deleteNotifications} 
          handleClose={handldeCloseDialog}
          handleSubmit={() => handleDeleteNotifications(deleteNotificationsId)}
          title={'Alerta'}
          message={'Esta seguro de eliminar el registro ?'}   
        />
      )}

    </>
  )
}


export default NotificationsListComponent