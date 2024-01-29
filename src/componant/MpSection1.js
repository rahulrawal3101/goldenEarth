import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    return (
        <>

            <Grid container sx={{ mt: '-154px', position: 'relative', }}>
                <Grid item xs={12}>
                    <ReactPlayer url={`${video}`} width={'100%'} height={'100%'} controls={false} playing={true} loop={true} muted={true} style={{border:'none'}} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', }} />

                    <Grid container sx={{ position: 'absolute', top: '170px', }}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '50px', color: 'white', textAlign: 'center' }}>Golden Earth</Typography>
                            <Typography sx={{ color: 'white', fontSize: '25px', textAlign: 'center' }}>Lease starting at $329/mo*</Typography>

                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute', bottom: '120px', zIndex: 1 }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: '27px' }}>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', fontSize: '12px', width: '265px', fontWeight: 'bold', mr: '15px', p: '10px', '&:hover': { bgcolor: 'rgba(244, 244, 244, 0.8)', color: '#424242', } }}>Custom Order</Button>
                            <Button variant='contained' sx={{ bgcolor: 'rgba(23, 26, 32, 0.65)', color: 'white', fontSize: '12px', width: '265px', fontWeight: 'bold', ml: '15px', p: '10px', '&:hover': { bgcolor: 'rgba(23, 26, 32, 0.65)', color: '#424242', } }}>Learn More</Button>

                        </Grid>
                        <Grid item xs={12} sx={{ pb: '17px' }} >
                            <Typography sx={{ color: 'white', fontSize: '13px', textAlign: 'center' }}>*Excludes taxes and fees with price subject to change. Available in select states. See Details</Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{  display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundImage: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: 'rgba(150,150,150)', backgroundBlendMode: 'multiply' , p:'30px'}}>
                <Grid item xs={12} sx={{pb:'15px'}}>
                    <Typography sx={{ color: '#eeeeee', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>All Types Of Property</Typography>

                </Grid>
                {
                    listArr.map((ele) => {
                        return (
                            <Grid item  xs={3.1} sx={{ height: '260px', backgroundImage: `url(${ele.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'rgba(230,230,230)', backgroundBlendMode: 'multiply', borderRadius: '7px', display:'flex',justifyContent:'space-between', alignItems:'flex-end', m:'10px', boxShadow:'1px 1px 2px 0px rgba(252,249,251,1)', p:'5px',transition: 'transform .5s ease' ,'&:hover':{ transform: 'scale(1.03)'}}} data-aos="fade-up">
                                <Typography sx={{fontSize:'22px', color:'#e0e0e0', fontWeight:'bold'}}>{ele.name}</Typography>
                                <Typography sx={{fontSize:'20px', color:'white'}}>{ele.type}</Typography>

                            </Grid>
                        )
                    })
                }


            </Grid>

            {/* <Grid container>
                <Grid item xs={12} sx={{bgcolor:'black', p:'20px'}}>
                    <Typography sx={{fontSize:'30px', color:'white', fontWeight:'bold', textAlign:'center'}}>Contact Us</Typography>
                </Grid>
            </Grid> */}
        </>
    );
}

export default MpSection1;