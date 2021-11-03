import React, { useEffect, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Avatar, Divider, Hidden, Menu, MenuItem, Tooltip } from '@mui/material'
import AlumnPng2 from '../../assets/images/alumn2.png'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import { GoogleLogout } from 'react-google-login'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useDispatch, useSelector } from 'react-redux'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { Link } from 'react-router-dom'
import './NavbarComponent.scss'
import { useSocket } from '../../hooks/useSocket'
import { setNotifications, setNotificationsIcon } from '../../store/Nav/NavActionsCreator'
import { Badge, Snackbar, Slide, Button} from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



const NavBar = ({drawerWidth, handleDrawerToggle}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const serverSocket = useSocket()
  const socket = useSelector(state => state.nav.socket)
  const invisible = useSelector(state => state.nav.notificationsIcon)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const notifications = useSelector(state => state.nav.notifications)
  const logoutGoogle = () => {
    serverSocket.disconnectSocket()
    window.localStorage.removeItem('_token')
    window.location.href = '/'
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }


  useEffect(() => { 
    if (socket == null) { 
      serverSocket.connectSocket()
    }    
    if (socket) {
      socket.on('notificacion', (response) => {
        dispatch(setNotificationsIcon(false))
        dispatch(setNotifications(response))
      })
    }
  },[socket, serverSocket, dispatch])

  const SlideTransition = (props) => {
    return <Slide {...props} direction="up" />
  }

  const handleCloseNotification = (event, reason) => {
    dispatch(setNotificationsIcon(false))
    dispatch(setNotifications(null))
  }


  return (
    <>
      { notifications != null && (
          <Snackbar
            open={notifications === null ? false : true}
            autoHideDuration={4000}
            onClose={handleCloseNotification}
            anchorOrigin={{ vertical: "bottom" , horizontal: "left" }}
            TransitionComponent={SlideTransition}
            message="Nueva Notificación"
            ContentProps={{ 
              sx: {
                minWidth: "200px !important",
                width: "200px !important"
              }
            }}
            className="snackNoti"
            action={
            <Link color="primary" to="/notifications" onClick={handleCloseNotification}>
              <Button style={{color: "#fff"}}>
              <NotificationsActiveIcon />
              </Button>
            </Link>
            }
          />
      )}


      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className="navbar"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Abrir Menú"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{flexGrow:"1"}}>
            <Hidden xsDown smUp >
              <img src={AlumnPng2} alt="AlumnApp" className="alumnLogo"/>
            </Hidden>
          </div>

          { 
            auth.roles.includes('SUPERVISOR') && (
            <Tooltip title="Panel de Supervisor">
              <Link to="/supervisor" style={{color:"#fff"}}>
                <IconButton size="small" sx={{ ml: 2 }} color="inherit">
                  <SupervisorAccountIcon />
                </IconButton>
              </Link>
            </Tooltip>
            )
          }
          
          { 
            auth.roles.includes('ADMINISTRADOR') && (
            <Tooltip title="Panel de Administrador">
              <Link to="/admin" style={{color:"#fff"}}>
                <IconButton size="small" sx={{ ml: 2 }} color="inherit">
                  <AdminPanelSettingsIcon />
                </IconButton>
              </Link>
            </Tooltip>
          
            )
          }
    
          <Tooltip title="Notificaciones">
            <Link to="/notifications" style={{color:"#fff"}}>
              <IconButton size="small" sx={{ ml: 2 }} color="inherit">
                <Badge 
                  sx={{ "& .MuiBadge-badge": { color: "lightgreen", backgroundColor: "red" } }} 
                  variant="dot" 
                  invisible={invisible}
                  >
                  <CircleNotificationsIcon/>
                </Badge>
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Preferencias">
            <IconButton to="#" onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }} src={auth.foto}/>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Link to="/account" style={{textDecoration: "none"}}>
              <MenuItem>
                <AccountBoxIcon className="iconLink"/> Mi cuenta
              </MenuItem>
            </Link>
            <Divider />
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onLogoutSuccess={logoutGoogle}
              render={renderProps => (
                <Link to="/#" onClick={renderProps.onClick} style={{textDecoration: "none"}}>
                  <MenuItem>
                    <ExitToAppIcon className="iconLink" /> Logout
                  </MenuItem>
                </Link>
              )}
            />
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
