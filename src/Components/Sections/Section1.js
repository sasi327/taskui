import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Filter from './Filter';
import Content from './Content';

export default function Section1() {
  return (
    <Box sx={{ flexGrow: 1,padding:'35px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
              <Filter/>
        </Grid>
        <Grid item xs={8} >
              <Content/>
        </Grid>
      </Grid>
    </Box>
  );
}
