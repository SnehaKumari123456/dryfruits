import React from 'react'
import '../assets/css/homePage.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../assets/img/home-img1.jpg';
import btm from '../assets/img/btm-bdr-img.jpg'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import homeimg7 from '../assets/img/home-img7.jpeg'
import homeimg8 from '../assets/img/home-img8.jpeg'
import homeimg9 from '../assets/img/home-img9.png'
import dryfrt from '../assets/img/dry-frt.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slides from '../components/slide/Slides'
import Slidess from '../components/Slidess/Slidess'



function HomePage() {
   
        const images = [
        //    "https://images.app.goo.gl/J2yo8LVU4pGGeNC96",
            // "../assets/img/home-img9.png",
             "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ];
  return (
    <div className='home-page-main'> 
    <Slide>
    <div className="each-slide-effect">
        <div className='slide1' style={{ 'backgroundImage': `url(${images[0]})` }}>
          
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          
        </div>
    </div>
</Slide>
{/* <div>
<img src={img1} alt="linkedin" style={{ width: '100%', height: 'auto' }} />
</div> */}
<div>
    <h3>
    Welcome to the Royaldivine Produce <span>Products</span> LLP
    </h3>
</div>
<div>
<img src={btm} alt="btm" style={{ width: '20%', height: 'auto' }} className='btm-bdr'/>
</div>
<div>
    <p className='pr-hm'>
    We genuinely trust that clients are in charge of achievement of any association and are dedicated to give quality products and operations to our customers before conferred time span.
    </p>
</div>
<div>
<Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{marginBottom:'50px',paddingBottom:"30px"}}>
                <Grid item xs={12} sm={6} md={4} lg={5} className='griditem-n'> 
                    <Box sx={{  width:"90%",marginLeft:"10px",height:'50vh',textAlign:'left',backgroundColor:'#f1f1f7' }}>
                       <h1>About <span>Us</span> </h1>
                       <p style={{textAlign:'center'}}>Company profile</p>
                       <Grid item  className='grid-abt-cont'>
                       We are unequivocally dedicated to give quality products and operations to our customers before conferred time span. Our workforce and experienced group are exclusively in charge of development and achievement of association.
                       
                       </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}className='mid-hm-cnt'>
                    <Box sx={{ height: 100, backgroundColor: 'lightgreen' ,width:"90%",
                        alignItems:'center !important'

                    }}>
                      
                    <Grid item className='abt-hom'>
                    <div> 
                        <img src={homeimg7} alt="homeimg7" style={{ width: '35px', height: 'auto',marginLeft:'20px' }} className='homeimg7'/>
                        </div>
                        About Us
                        

                    </Grid>
                    <Grid item className='vsn-hm'>
                    <div>
                        <img src={homeimg8} alt="homeimg8" style={{ width: '35px', height: 'auto' ,marginLeft:'20px' }} className='homeimg8'/>
                        </div>
                        Vision
                    
                    </Grid>
                    <Grid item className='msn-hm'>
                    <div>
                        <img src={homeimg9} alt="homeimg9" style={{ width: '35px', height: 'auto' ,marginLeft:'20px' }} className='homeimg9'/>
                        </div>
                        Mission
                    
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={5}>
                    <Box sx={{ height: 100, backgroundColor: 'lightcoral',marginRight:"10px" }}>
                    <img src={dryfrt} alt="dryfrt" style={{ width: '100%', height: '55vh' }} className='dryfrt'/>
                    </Box>
                </Grid>
                
                
            </Grid>
            
        </Box>
        <div>
            <h1> Our Products</h1>
            <Slidess />
        </div>
        <div>
            <h4>Diwali Special Offers- Corporate Dry Fruit Gift Online (UPTO 30% Off)

            </h4>
           <Slides/>
        </div>
</div>

</div>
  )
}

export default HomePage