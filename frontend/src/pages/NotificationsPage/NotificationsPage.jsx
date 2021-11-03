import React, { useEffect, useRef, useState } from 'react'
import Typography from '@mui/material/Typography'
import { showHideLoading } from '../../store/Nav/NavActionsCreator'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../services/axios'
import { setListNotifications, changeReadNotification } from '../../store/Nav/NavActionsCreator'
import { Accordion, AccordionDetails, AccordionSummary, Button, CircularProgress } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ControlPointIcon from '@mui/icons-material/ControlPoint'


const NotificationsPage = () => {
  const dispatch = useDispatch()
  const [btnMore, setBtnMore] = useState(<ControlPointIcon />)
  const auth = useSelector( state => state.auth )
  const notifications = useSelector( state => state.nav.listnotifications )
  const current = useSelector(state => state.nav.listnotificationscurrentpage)
  const next = useSelector(state => state.nav.listnotificationsnextpage)
  

  const tempGetData = useRef()
  const getNotifications = async (page) => {
    try {
      dispatch(showHideLoading(true))
      
      const url = `/users/${auth.uid}/notifications${ (page ? '?page=' + page : '') }`
      await axios.get(url)
      .then( response => {
        const data = response.data.data
        dispatch(setListNotifications(data))
      })
      .catch(error => {
        console.log('Error ' +error)
      })
      .finally(()=> {
        dispatch(showHideLoading(false))
      })
    } catch(error) {
    }
  }
  tempGetData.current = getNotifications


  useEffect( () => {
    tempGetData.current(0)
  },[]) 
  




  const moreNotifications = () => {
    setBtnMore(<CircularProgress style={{color: "#fff"}} size={20} />)
    getNotifications(next)
    setBtnMore(<ControlPointIcon />)
  }

  const [expanded, setExpanded] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const readNotification = async (key) => {
    try {
      const url = `/users/${auth.uid}/notifications/${key}`
      await axios.get(url)
      .then( response => {
        dispatch(changeReadNotification(key))
      })
      .catch(error => {
        console.log('Error ' + error)
      })
    } catch(error) {
      console.log('Error ' + error)
    }
  }


  return (
    <div>
      <Typography variant="h3" color="initial">
        Notificaciones
      </Typography>


      { notifications && notifications.map( (e) => {
        const fecha =  new Date(Date.parse(e.createdAt))
        const mes = fecha.getMonth() < 10 ? `0${fecha.getMonth()}` : fecha.getMonth()        
        const dia = fecha.getDay() < 10 ? `0${fecha.getDay()}` : fecha.getDay()

        const back = e.read ? '#f0f0f0' : '#ffffff'
        return (
          <Accordion 
            expanded={expanded === e.id } 
            key={e.id} 
            style={{marginBottom: "10px", background: back}} 
            onChange={handleChange(e.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${e.id}-content`}
              onClick={() => readNotification(e.id)}
            >
              <Typography>{e.title} <span >{ `${fecha.getFullYear()}-${mes}-${dia}` }</span></Typography>
            </AccordionSummary>
            <AccordionDetails style={{paddingBottom: "50px"}}>
              <div dangerouslySetInnerHTML={{__html: e.notification}} />
            </AccordionDetails>
          </Accordion>
        )})
      } 



      { current !== next && next !== null ? (
        <div style={{marginTop: "50px", textAlign:"center"}}>
          <Button
            variant="contained"
            size="medium"
            onClick={moreNotifications}
            startIcon={btnMore}
            style={{color: '#ffffff'}}
            >
            Notificaciones
          </Button>  
        </div>

      ) : ''}

      
      
    </div>
  )
}

export default NotificationsPage
