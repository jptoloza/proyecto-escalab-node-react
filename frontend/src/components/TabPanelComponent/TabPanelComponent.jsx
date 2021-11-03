import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types'

const TabPanelComponent = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ paddingTop: 20}} 
    >
      {value === index && (
      <Box sx={{ p: 3 }} style={{padding: 0}} >
        <Typography component={'div'} style={{padding: 0}}>{children}</Typography>
      </Box>
    )}
  </div>

  )
}

TabPanelComponent.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export default TabPanelComponent


