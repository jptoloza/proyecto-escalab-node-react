import React from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import AlumnSvg from '../../assets/images/alumn.svg'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom'
import './SideBarComponent.scss'
import GroupIcon from '@mui/icons-material/Group';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const AdminSideBar = ({container, mobileOpen, handleDrawerToggle, drawerWidth}) => {

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true}}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <div className="alumnLogoDiv">
          <a href="/">
            <img src={AlumnSvg} alt="AlumnApp" className="alumnLogo"/>          
          </a>
        </div>
        
        <List>
          <Link to="/admin/users" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Usuarios" />
            </ListItemButton>
          </Link>

          <Link to="/admin/notifications" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Notificaciones" />
            </ListItemButton>
          </Link>

          <Link to="/admin/news" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <AnnouncementIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Noticias" />
            </ListItemButton>
          </Link>

        </List>
      </Drawer>
      










      <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
        <div className="alumnLogoDiv">
          <a href="/">
            <img src={AlumnSvg} alt="AlumnApp" className="alumnLogo"/>          
          </a>
        </div>

        <List>

          <Link to="/admin/users" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Usuarios" />
            </ListItemButton>
          </Link>

          <Link to="/admin/notifications" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <NotificationsActiveIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Notificaciones" />
            </ListItemButton>
          </Link>

          <Link to="/admin/news" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <AnnouncementIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Noticias" />
            </ListItemButton>
          </Link>

        </List>
      </Drawer>
    </>
  )
}

export default AdminSideBar


