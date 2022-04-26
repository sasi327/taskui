import * as React from 'react';
import '../../App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Fab, Rating, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import { contentCard } from '../../References/content';


export default function Content(props) {

  return ( 
  <>
      {contentCard.map((data, index) => {
        return <>  <Card  style={{marginTop:'25px'}} key={index}>
        <Box sx={{ display: 'flex' }} >
          <Stack direction="row" spacing={1}>
            <Avatar sx={{ marginTop: '50px', width: '120px', height: '120px' }} src={data.img} />
          </Stack>
          <CardContent>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="inherit" component="p">
                CartWright Tristian
              </Typography>
              <Fab variant="extended" size="medium" color="inherit" aria-label="add">Follow</Fab>
            </Box>
            <Stack spacing={1}>
              <Rating name="size-large" defaultValue={4} size="small" />
            </Stack>
            <Typography variant="" sx={{ textAlign: 'start', fontSize: '13px' }}>{data.paragraph}</Typography>
            <CardActions sx={{ marginTop: '15px' }}>
              <Button size="small" variant='contained' color='inherit' >go lang</Button>
              <Button size="small" variant='contained' color='inherit' >info</Button>
              <Button size="small" variant='contained' color='inherit' >overflow</Button>
            </CardActions>
          </CardContent>
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <CardActions>
              <Button size="medium" variant='contained' color='warning'>Ask A Question</Button>
              <Button size="medium" variant='contained' color='inherit' >Learn More</Button>
            </CardActions>
            <Link size="medium" style={{ color: 'orange' }} >$500 Onwards</Link>
          </Box>
          </Card>
        </>
      })}


    
    </>
  );
}
