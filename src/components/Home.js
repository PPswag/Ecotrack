import React from 'react'
import { Toolbar, Typography, Button } from "@mui/material";
import { Paper } from '@mui/material';

export const Home = () => {
  return (
    <div>
      <Typography variant='h4' align='center' sx={{position: 'fixed', top: 300, left: 100}}>
        Track and Reduce your<br/>Carbon Footprint.
      </Typography>
      <Typography align='center' sx={{position: 'fixed', top: 500, left: 300}}>
        Monitor daily activities and discover<br/>personalized recommendations for<br/>reducing your environmental impact.
      </Typography>
      <Button href="/register" variant="contained" align='center' sx={{position: 'fixed', top: 500, left: 1500}}>
        Get Started
      </Button>
    </div>
  )
}