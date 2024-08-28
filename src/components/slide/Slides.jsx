import React from 'react';
import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slide.css'
import img1 from '../images/home-mix-dw-dry-fruits1.jpg'
import img2 from '../images/home-mix-dw-dry-fruits2.jpg'
import img3 from '../images/home-mix-dw-dry-fruits3.jpg'
import img4 from '../images/home-mix-dw-dry-fruits4.jpg'
import img5 from '../images/home-mix-dw-dry-fruits5.jpg'
import img6 from '../images/home-mix-dw-dry-fruits6.jpg'
import img7 from '../images/home-mix-dw-dry-fruits7.jpg'
import img8 from '../images/home-mix-dw-dry-fruits8.jpg'
import img9 from '../images/home-mix-dw-dry-fruits9.jpg'
function Slides() {
    

    return (
        
        
        <Slide slidesToScroll={3} slidesToShow={3} indicators={true}>
        <div style={{
    textAlign: 'center',
    background : 'white',
    padding: '20px 0',
    fontSize: '30px'
  }}><img src={img1} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr' />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img2} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr'  />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img3} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img4} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img5} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr'  />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img6} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
  </div>
        <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img3} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr'  />
  </div>
  <div style={{
    textAlign: 'center',
    background : 'white',
    padding: '20px 0',
    fontSize: '30px'
  }}><img src={img8} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr'  />
  </div>
  <div style={{
     textAlign: 'center',
     background : 'white',
     padding: '20px 0',
     fontSize: '30px'
  }}><img src={img9} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
  </div>
    </Slide>
       
    );
}

export default Slides;
