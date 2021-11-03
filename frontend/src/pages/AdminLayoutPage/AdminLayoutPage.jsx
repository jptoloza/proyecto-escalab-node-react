import React, { useState } from 'react'
import Navbar from '../../components/NavbarComponent/NavbarComponent'
import AdminSideBar from '../../components/SideBarComponent/AdminSideBarComponent'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'


const drawerWidth = 240
const AdminLayoutPage = ({ children, ...props }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { window } = props
  const container = window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }  


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />)
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <AdminSideBar
            container={container} 
            mobileOpen={mobileOpen} 
            handleDrawerToggle={handleDrawerToggle} 
            drawerWidth={drawerWidth}
          />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          { children }            
        </Box>
      </Box>
    </>
  )
}

export default AdminLayoutPage
