import React, { useEffect, useState, useRef } from 'react'
import axios from '../../services/axios'
import { Grid, Button, Typography } from '@mui/material'
import NewsItemComponent from '../../components/NewsItemComponent/NewsItemComponent'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'





const HomePage = () => {
  const [news, setNews] = useState(null)
  const [page, setPage] = useState(1)
  const [loadData, setLoadData] = useState(false)
  const tempGetData = useRef()


  const GetData = async() => {
    const url = `/news?sort=-createdAt&page=${page}&limit=3`
    setLoadData(true)
    await axios.get(url)
      .then( response => {
        const data = response.data.data.docs
        let docs = news ? news.docs : []
        if (news) {
          data.docs.forEach(e => {
            let index = docs.findIndex(key => key._id === e._id);             
            if (index === -1) docs.push(e)
          })
          setNews({
            docs,
            totalDocs: data.totalDocs,
            limit: data.limit,
            totalPages: data.totalPages,
            page: data.page,
            pagingCounter: data.pagingCounter,
            hasPrevPage: data.hasNextPage,
            hasNextPage: data.hasNextPage,
            prevPage: data.prevPage,
            nextPage: data.nextPage 
          })
          setPage(data.page) 
        } else {
          setNews(data)
        }
        
      })
      .catch(error => {
        console.log(error)
      })
      .finally(()=> {
        setLoadData(false)
      })
  }

  tempGetData.current = GetData
  
  useEffect(() => {
    tempGetData.current()
  }, [page])


  return (
    <div style={{marginBottom: "300px"}}>
      <Typography variant="h3" color="initial">
        Noticias
      </Typography>

      { news && (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          
          { news.docs.length 
            ? news.docs.map((e) => <NewsItemComponent key={e._id} data={e} /> ) : ''
          }

          { loadData 
            ? (
                <Box sx={{ marginTop: "40px", width: '100%', textAlign: 'center' }}>
                  <CircularProgress />
                </Box>
            ) : ''
          }

          { news.nextPage !== page && news.nextPage !== null
            ? (
              <>
                <Box sx={{ marginTop: "50px",width: '100%', textAlign: 'center' }}>
                  <Button color="primary" className="buttonPrimary" style={{color:"#fff"}} onClick={() => setPage(news.nextPage)}>
                    Más Noticias
                  </Button>
                </Box>
              </>
            ) : '' }          

        </Grid>
        )
      }



    </div>
  )
}

export default HomePage
