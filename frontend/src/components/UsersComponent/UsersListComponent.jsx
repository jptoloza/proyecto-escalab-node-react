import React, { useEffect, useState, useRef } from 'react'
import axios from '../../services/axios'
import { DataGrid } from '@mui/x-data-grid'
import { setUsers } from '../../store/Users/UsersActionsCreator'
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


const UserListComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])
  const users = useSelector( state => state.users)
  
  const dispatch = useDispatch()

  const [deleteUser, setDeleteUser] = useState(false)
  const [deleteUserId, setDeleteUserId] = useState()
  const tempGetData = useRef()

  

 


  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(EscapeRegExp(searchValue), 'i');
    const filteredRows = users.users.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };


  const handleDeleteUser = async (id) => {
    handldeCloseDialog()
    dispatch(showHideLoading(true))
    setLoading(true)
    await axios.delete(`/users/${id}`)
      .then( response => {
        dispatch(setUsers([]))
        getData()
        dispatch(setSnackBar({msg: 'Usuario Eliminado.', show: true}))
      })
      .catch( error => {
      })
      .finally(() => {
        setLoading(false)
        dispatch(showHideLoading(false))

      })
  }

  const openDialog = (id) => {
    setDeleteUserId(id)
    setDeleteUser(true)
  }

  const handldeCloseDialog = () => {
    setDeleteUser(false)
  }

  const columns = [
    { field: 'id',
      headerName: 'Acción',
      width: '100', 
      filterable: false,
      type: 'actions',
      renderCell: (params) => (
        <div>
          <Link to={`/admin/users/edit/${params.value}`}>
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
    { field: 'active', headerName: 'Activo', minWidth: '100', align: 'center', headerAlign: 'center'},
    { field: 'firstname', headerName: 'Nombre', minWidth: '200', flex: 1 },
    { field: 'rut', headerName: 'R.U.T.', minWidth: '100', flex: 1},
    { field: 'email', headerName: 'Email', minWidth: '200', flex: 1},
  ]



  const getData = async() => {
    setLoading(true)
    await axios.get('/users?paginate=0')
      .then( response => {
        const docs = response.data.data.docs
        const newRows = docs.map( (e) => {
          return {
            active: `${e.active ? 'Sí' : 'No'}`,
            id: e._id,
            firstname: `${e.firstname} ${e.lastname}`,
            rut: `${e.rut}-${e.dv}`,
            email: e.email
          }
        })
        dispatch(setUsers([]))
        dispatch(setUsers(newRows))
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

      { deleteUser && (
        <DialogComponent 
          id={deleteUserId}
          open={deleteUser} 
          handleClose={handldeCloseDialog}
          handleSubmit={() => handleDeleteUser(deleteUserId)}
          title={'Alerta'}
          message={'Esta seguro de eliminar el registro ?'}   
        />
      )}

    </>
  )
}


export default UserListComponent

