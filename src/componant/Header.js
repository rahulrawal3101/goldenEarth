'use client'
import { Box, Button, Grid, Typography } from '@mui/material';
// import Image from 'next/image';
import React from 'react';
// import teslalogo from '../assets/teslalogo.png';
import teslwhitelogo from '../assets/teslawhitelogo.png';
import mainlogo from '../assets/mainlogo.png';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
    return (
        <>
            <Grid container sx={{ position: 'sticky', top: '0px', zIndex: 99 }}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(94deg, rgba(0,0,0,1) 0%, rgba(57,55,55,1) 31%, rgba(0,0,3,1) 46%)', p: '12px' }}>
                    <Grid item lg={2} md={2.5} sm={12} xs={12} >
                        <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { lg: '17px', md: '16px', sm: '16px', xs: '15px' }, textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' } }}>$7,500 Federal Tax Credit</Typography>

                    </Grid>
                    <Grid item lg={8.2} md={7.5} sm={12} xs={12} >

                        <Typography sx={{ fontSize: { lg: '14px', md: '13px', sm: '12px', xs: '11px' }, color: 'white', fontWeight: 'bold', letterSpacing: '1px', textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, mt: { lg: '0px', md: '0px', sm: '5px', xs: '5px',  } }}>Eligible buyers now receive $7,500 off the purchase price of new 2024 Model Y and Model X Dual Motor. Applied at time of delivery.</Typography>
                    </Grid>
                    <Grid item lg={1} md={1.4} sm={12} xs={12}>
                        <Typography sx={{ fontSize: { lg: '17px', md: '15px', sm: '15px', xs: '15px' }, textAlign: { lg: 'center', md: 'center', sm: 'left', xs: 'left' }, mt: { lg: '0px', md: '0px', sm: '4px', xs: '4px' } }}><a href='' style={{ color: 'white' }}>See Details</a></Typography>

                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', bgcolor: 'transparent', zIndex: 9999, }}>
                    <Grid item xs={3} sx={{ display:'flex', justifyContent:'left'}}>
                        <Box sx={{ width: { lg: '115px', md: '120px', sm: '100px', xs: '82px' }, height: '60px', }}>

                            <img src={mainlogo} style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Grid>

                    <Grid item xs={3.3} sx={{ display: { lg: 'flex', mf: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontSize: '15px', color: '#212121', fontWeight: 'bold', color: 'white' }}>Vehicles</Typography>
                        <Typography sx={{ fontSize: '15px', color: '#212121', fontWeight: 'bold', color: 'white' }}>Energy</Typography>
                        <Typography sx={{ fontSize: '15px', color: '#212121', fontWeight: 'bold', color: 'white' }}>Charging</Typography>
                        <Typography sx={{ fontSize: '15px', color: '#212121', fontWeight: 'bold', color: 'white' }}>Discover</Typography>
                        <Typography sx={{ fontSize: '15px', color: '#212121', fontWeight: 'bold', color: 'white' }}>Shop</Typography>

                    </Grid>
                    <Grid item xs={3} sx={{ display:{lg: 'flex', md:'flex', sm:'none', xs:'none'}, justifyContent: 'right', alignItems: 'center', p: '0px 15px' }}>
                        <HelpOutlineOutlinedIcon sx={{ color: 'white', fontSize: '25px', mr: '7px' }} />
                        <LanguageOutlinedIcon sx={{ color: 'white', fontSize: '25px', mr: '7px' }} />
                        <PersonOutlineOutlinedIcon sx={{ color: 'white', fontSize: '25px' }} />

                    </Grid>
                    <Grid item xs={3} sx={{display:{lg: 'none', md:'none', sm:'flex', xs:'flex'}, justifyContent: 'right', alignItems: 'center', p: '0px 15px' }}>
                        <Button sx={{ bgcolor: '#e0e0e0', color: 'white', textTransform: 'capitalize', background: 'rgba(0,0,0,0.5)',fontSize:{lg:'14px', md:'13px', sm:'12px',xs:'11px'} }}>Menu</Button>
                    </Grid>

                </Grid>

            </Grid>





        </>
    )
}

export default Header