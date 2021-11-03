import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid, CardActionArea, CardActions } from '@mui/material';
import Moment from 'react-moment';



const NewsItemComponent = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{marginBottom: '20px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={data.image}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              <Moment format="DD/MM/YYYY hh:mm">
                {data.createdAt}
              </Moment>
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>

            <div dangerouslySetInnerHTML={{ __html: data.abstract }} />

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" target="_blank" href={data.externalurl}>
            Más Información
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default NewsItemComponent
