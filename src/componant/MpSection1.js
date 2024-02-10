import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../assets/property.mp4';
import tiny from '../assets/tinyhouse.png';
import exphouse from '../assets/exphouse.jpg';
import threefour from '../assets/34bed.webp';
import vilas from '../assets/vilas.jpeg';
import commercial from '../assets/commercial.webp';
import office from '../assets/office.webp';
import bgimg from '../assets/bgimg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img4 from '../assets/img4.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import godvideo from '../assets/godvideo.mp4';
import ecommerce from '../assets/ecommerce.mp4';
import adel from '../assets/adel.mp4';
import hero from '../assets/hero.mp4';



const listArr = [
    {
        name: 'Tiny Houses',
        type: '1-bed',
        image: tiny
    },
    {
        name: 'Expandable House',
        type: '2-bed',
        image: exphouse
    },
    {
        name: 'Third Houses',
        type: '3-4bed',
        image: threefour
    },
    {
        name: 'Vilas',
        type: '1- bed',
        image: vilas
    },
    {
        name: 'Commercial Cafe',
        type: '1- bed',
        image: commercial
    },
    {
        name: 'Office',
        type: '1- bed',
        image: office
    }
]

const MpSection1 = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // When the component mounts, retrieve the playback state from local storage
    useEffect(() => {
        const savedState = localStorage.getItem('videoPlaybackState');
        setIsPlaying(savedState === 'true');
    }, []);

    // Update the playback state in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('videoPlaybackState', isPlaying);
    }, []);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>

            <Grid container sx={{ mt: { lg: '-154px', md: '-154px', sm: '-100px', xs: '-65px' }, position: 'relative', }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${adel}`} width={'100%'} height={'100%'} controls={true} playing={true} loop={true} muted={true} volume={0} style={{border:'1px solid transparent'}}/>
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight:'bold',fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: '#0091ea', textAlign: 'center',}}>Adel<span style={{color:'black'}}>social</span></Typography> */}
                            {/* <Typography sx={{ color: '#212121', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>

                    {/* <Grid container sx={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', p: '30px', bottom: { lg: '110px', md: '10px', sm: '-20px', xs: '-10px' }, zIndex: 1, transition: 'opacity 0.5s ease-in-out', opacity: isHidden ? 0 : 1, pointerEvents: isHidden ? 'none' : 'auto', }}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mb: { lg: '30px', md: '20px', sm: '10px', xs: '0px' }, mr: { lg: '15px', md: '15px', sm: '0px', xs: '0px' } }}>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold', p: '7px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', } }}>Custom Order</Button>

                        </Grid>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: { lg: '30px', md: '20px', sm: '10px', xs: '0px' }, ml: { lg: '15px', md: '15px', sm: '0px', xs: '0px' }, mt: { lg: '0px', md: '0px', sm: '5px', xs: '5px' } }}>

                            <Button variant='contained' sx={{ bgcolor: 'rgba(23, 26, 32, 0.95)', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold', p: '7px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 0.65)', color: '#424242', }, }}>Learn More</Button>
                        </Grid>
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center', alignItems: 'flex-end', }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid>
                    </Grid> */}

                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }}>Learn More</Button>

                        </Grid>

                        {/* <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,0.4)', backgroundBlendMode: 'multiply', p: '30px', mt: '-5px' }}>
                <Grid item xs={12} sx={{ pb: '15px' }} data-aos="fade-up">
                    <Typography sx={{ fontWeight:'bold', color: '#eeeeee', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '35px' }, textAlign: 'center', mt: '17px',fontWeight:'bold' }}>All Types Of Property</Typography>

                </Grid>
                {
                    listArr.map((ele) => {
                        return (
                            <Grid item lg={3.1} md={4} sm={5} xs={12} data-aos="fade-up" sx={{ height: { lg: '260px', md: '230px', sm: '200px', xs: '200px' }, backgroundImage: `url(${ele.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(0,0,0,0.2)', backgroundBlendMode: 'multiply', borderRadius: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', m: '10px', boxShadow: '1px 1px 2px 0px rgba(252,249,251,1)', p: '5px' }} >
                                <Typography sx={{ fontSize: { lg: '22px', md: '20px', sm: '17px', xs: '15px' }, color: '#e0e0e0', fontWeight: 'bold' }}>{ele.name}</Typography>
                                <Typography sx={{ fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' }, color: 'white' }}>{ele.type}</Typography>

                            </Grid>
                        )
                    })
                }


            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: { lg: '700px', md: '500px', sm: '450px', xs:'400px' }, backgroundImage: `url(${img4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'rgba(150,150,150)', backgroundBlendMode: 'multiply', p: '30px' }}>
                <Box sx={{mt:{lg:'10px', md:'10px', sm:'10px',xs:'0px',}}} data-aos="fade-up">
                    <Typography sx={{ fontSize: { lg: '50px', md: '40px', sm: '35px', xs: '35px' }, color: 'white', textAlign: 'center',fontWeight:'bold',mt:{lg:'20px', md:'15px', sm:'10px',xs:'0px'} }}>Golden Earth</Typography>
                    <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography>

                </Box>
                <Box   >
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'} ,mr:{lg:'15px', md:'15px',sm:'0px', xs:'0px'} }}>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', } }}>Custom Order</Button>

                        </Grid>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'},ml:{lg:'15px', md:'15px',sm:'0px', xs:'0px'}, mt:{lg:'0px', md:'0px', sm:'5px',xs:'5px'} }}>

                            <Button variant='contained' sx={{ bgcolor: 'rgba(23, 26, 32, 0.95)', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 0.65)', color: '#424242', } }}>Learn More</Button>
                        </Grid>
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center', alignItems: 'flex-end', }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid>
                    </Grid>
                </Box>




            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: { lg: '700px', md: '500px', sm: '450px', xs:'400px' }, backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundColor: 'rgba(150,150,150)', backgroundBlendMode: 'multiply', p: '30px', }}>
                <Box sx={{mt:{lg:'10px', md:'10px', sm:'6px',xs:'0px'}}}data-aos="fade-up" >
                    <Typography sx={{ fontSize: { lg: '50px', md: '40px', sm: '35px', xs: '35px' }, color: 'white', textAlign: 'center',fontWeight:'bold',mt:{lg:'20px', md:'15px', sm:'10px',xs:'0px'} }}>Golden Earth</Typography>
                    <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography>

                </Box>
                <Box >
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'} ,mr:{lg:'15px', md:'15px',sm:'0px', xs:'0px'} }}>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', } }}>Custom Order</Button>

                        </Grid>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'},ml:{lg:'15px', md:'15px',sm:'0px', xs:'0px'}, mt:{lg:'0px', md:'0px', sm:'5px',xs:'5px'} }}>

                            <Button variant='contained' sx={{ bgcolor: 'rgba(23, 26, 32, 0.95)', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 0.65)', color: '#424242', } }}>Learn More</Button>
                        </Grid>
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center', alignItems: 'flex-end', }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid>
                    </Grid>
                </Box>




            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: { lg: '700px', md: '500px', sm: '450px', xs:'400px' }, backgroundImage: `url(${img3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'rgba(150,150,150)', backgroundBlendMode: 'multiply', p: '30px' }}>
                <Box sx={{mt:{lg:'10px', md:'10px', sm:'6px',xs:'0px'}}} data-aos="fade-up">
                    <Typography sx={{ fontSize: { lg: '50px', md: '40px', sm: '35px', xs: '35px' }, color: 'white', textAlign: 'center',fontWeight:'bold', mt:{lg:'20px', md:'15px', sm:'10px',xs:'0px'} }}>Golden Earth</Typography>
                    <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography>

                </Box>
                <Box  >
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'} ,mr:{lg:'15px', md:'15px',sm:'0px', xs:'0px'} }}>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', } }}>Custom Order</Button>

                        </Grid>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', mb: {lg:'30px', md:'20px', sm:'10px', xs:'0px'},ml:{lg:'15px', md:'15px',sm:'0px', xs:'0px'}, mt:{lg:'0px', md:'0px', sm:'5px',xs:'5px'} }}>

                            <Button variant='contained' sx={{ bgcolor: 'rgba(23, 26, 32, 0.95)', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '100%', xs: '100%' }, fontWeight: 'bold',  p: '7px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 0.65)', color: '#424242', } }}>Learn More</Button>
                        </Grid>
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' }, justifyContent: 'center', alignItems: 'flex-end', }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid>
                    </Grid>
                </Box>

            </Grid> */}

            <Grid container sx={{ position: 'relative',mt:'-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${ecommerce}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} volume={1} style={{border:'1px solid transparent'}} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography> */}
                            {/* <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }}>Learn More</Button>

                        </Grid>

                        {/* <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid> */}

                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ position: 'relative',mt:'-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${godvideo}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} style={{border:'1px solid transparent'}}  />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography>
                            <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }}>Learn More</Button>

                        </Grid>

                        <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            {/* <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography> */}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container sx={{ position: 'relative',mt:'-10px' }}>
                <Grid item xs={12} >
                    <ReactPlayer url={`${hero}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} style={{border:'1px solid transparent'}} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.4)', }} /> */}

                    <Grid container sx={{ position: 'absolute', top: { lg: '170px', md: '110px', sm: '70px', xs: '30px' }, }}>
                        <Grid item xs={12} data-aos="fade-up">
                            {/* <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '45px', md: '40px', sm: '35px', xs: '30px' }, color: 'white', textAlign: 'center' }}>Golden Earth</Typography>
                            <Typography sx={{ color: 'white', fontSize: { lg: '25px', md: '20px', sm: '17px', xs: '14px' }, textAlign: 'center' }}>Lease starting at $329/mo*</Typography> */}

                        </Grid>
                    </Grid>



                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: { lg: '120px', md: '50px', sm: '1px', xs: '0px' }, zIndex: 1 }} data-aos="fade-up">
                        <Grid item xs={12} sx={{ display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: '#e0e0e0', color: '#424242', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: '#e0e0e0', color: '#424242', } }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: '#212121', color: 'white', fontSize: { lg: '12px', md: '11px', sm: '10px', xs: '10px' }, width: { lg: '265px', md: '200px', sm: '110px', xs: '120px' }, fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: '#212121', color: 'white', } }}>Learn More</Button>

                        </Grid>

                        <Grid item xs={12} sx={{ pb: '17px', display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                            {/* <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography> */}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>



        </>
    );
}

export default MpSection1;