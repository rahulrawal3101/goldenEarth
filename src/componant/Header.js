'use client'
import {Box, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
import React from 'react';
// import teslalogo from '../assets/teslalogo.png';
import teslwhitelogo from '../assets/teslawhitelogo.png';
import mainlogo from '../assets/mainlogo.png';

const Header = () => {
    return (
        <>
            <Grid container sx={{position:'sticky', top:'0px', zIndex:99}}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(94deg, rgba(0,0,0,1) 0%, rgba(57,55,55,1) 31%, rgba(0,0,3,1) 46%)', p: '12px' }}>
                    <Grid item xs={11} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '18px',  }}>$7,500 Federal Tax Credit</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'white', fontWeight: 'bold', letterSpacing:'1px' }}>Eligible buyers now receive $7,500 off the purchase price of new 2024 Model Y and Model X Dual Motor. Applied at time of delivery.</Typography>
                        <Typography sx={{ fontSize: '17px', color: 'white' }}>See Details</Typography>

                    </Grid>
                </Grid>
                <Grid container sx={{  alignItems:'center', bgcolor:'transparent', zIndex:9999,}}>
                    <Grid item xs={4.5} >
                        <Box sx={{width:'130px', height:'60px', ml:'30px', }}>

                        <img src={mainlogo} style={{width:'100%', height:'100%'}}/>
                        </Box>
                    </Grid>

                    <Grid item xs={3.3} sx={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                        <Typography sx={{fontSize:'15px', color:'#212121', fontWeight:'bold', color:'white'}}>Vehicles</Typography>
                        <Typography sx={{fontSize:'15px', color:'#212121',fontWeight:'bold', color:'white' }}>Energy</Typography>
                        <Typography sx={{fontSize:'15px', color:'#212121',fontWeight:'bold' , color:'white'}}>Charging</Typography>
                        <Typography sx={{fontSize:'15px', color:'#212121',fontWeight:'bold', color:'white' }}>Discover</Typography>
                        <Typography sx={{fontSize:'15px', color:'#212121', fontWeight:'bold', color:'white'}}>Shop</Typography>

                    </Grid>

                </Grid>

            </Grid>





        </>
    )
}

export default Header