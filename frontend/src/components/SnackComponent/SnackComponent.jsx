import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSnackBar } from '../../store/Nav/NavActionsCreator'
import { Snackbar } from '@mui/material'
import Slide from '@mui/material/Slide'



const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />
}

const SnackComponent = () => {
  const snackbar = useSelector(state => state.nav.snackbar)
  const dispatch = useDispatch()

  const close = () => dispatch(setSnackBar(null))

  return (
    <div>

        { snackbar && (
        <Snackbar
          open={ snackbar.show ? true : false} 
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top" , horizontal: "center" }}
          TransitionComponent={SlideTransition}
          message={snackbar.msg}
          onClose={close}
          ContentProps={{ 
            sx: {
              minWidth: "200px !important",
              width: "200px !important"
            }
          }}
          className="snackNoti"  
        />
      )}

      
    </div>
  )
}

export default SnackComponent

