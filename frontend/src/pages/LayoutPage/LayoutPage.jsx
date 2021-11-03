import React, { useState } from 'react'
import Navbar from '../../components/NavbarComponent/NavbarComponent'
import SideBar from '../../components/SideBarComponent/SideBarComponent'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useSelector } from 'react-redux'


const drawerWidth = 240
const LayoutPage = ({ children, ...props }) => {
  const state = useSelector(state => state.auth)

  const [mobileOpen, setMobileOpen] = useState(false)
  const { window } = props
  const container = window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }  


  return (
    <>
      { state.token ? (
      <Box sx={{ display: 'flex' }}>
        <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />)
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <SideBar
            container={container} 
            mobileOpen={mobileOpen} 
            handleDrawerToggle={handleDrawerToggle} 
            drawerWidth={drawerWidth}
          />
        </Box>)
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          { children }            
        </Box>
      </Box>

      ) :
        (
          <div>
          { children }            
          </div>
        )
      }
    </>
  )
}

export default LayoutPage
