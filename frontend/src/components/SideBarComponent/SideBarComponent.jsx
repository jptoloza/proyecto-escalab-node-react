import React from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import AlumnSvg from '../../assets/images/alumn.svg'
import DateRangeIcon from '@mui/icons-material/DateRange'
import MedicationIcon from '@mui/icons-material/Medication'
import DescriptionIcon from '@mui/icons-material/Description'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import HomeIcon from '@mui/icons-material/Home'

import { Link } from 'react-router-dom'


import './SideBarComponent.scss'
import HelpIcon from '@mui/icons-material/Help'


const SideBar = ({container, mobileOpen, handleDrawerToggle, drawerWidth}) => {


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
          <a href="/" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </a>


          <Link to="/documentos" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Documentos" />
            </ListItemButton>
          </Link>

          <Link to="/asesoria" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <DateRangeIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Asesoria Académica" />
            </ListItemButton>
          </Link>

          <Link to="/inasistencia" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <MedicationIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Inasistencias" />
            </ListItemButton>
          </Link>

          <Link to="/encuestas" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <TrendingUpIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Encuestas" />
            </ListItemButton>
          </Link>

          <Link to="/ayuda" onClick={handleDrawerToggle} className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <HelpIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Ayuda" />
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

          <a href="/" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </a>


          <Link to="/documentos" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <DescriptionIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Documentos" />
            </ListItemButton>
          </Link>

          <Link to="/asesoria" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <DateRangeIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Asesoria Académica" />
            </ListItemButton>
          </Link>

          <Link to="/inasistencia" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <MedicationIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Inasistencias" />
            </ListItemButton>
          </Link>

          <Link to="/encuestas" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <TrendingUpIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Encuestas" />
            </ListItemButton>
          </Link>

          <Link to="/ayuda" className="linkSidebar">
            <ListItemButton color="primary">
              <ListItemIcon className="listItemIcons">
                <HelpIcon/>
              </ListItemIcon>
              <ListItemText className="listItemTexts" primary="Ayuda" />
            </ListItemButton>
          </Link>

        </List>
      </Drawer>
    </>
  )
}

export default SideBar


