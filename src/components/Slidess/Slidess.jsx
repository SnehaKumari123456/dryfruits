import React from 'react'
import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slides.css'
import pr from '../images/home-our-product1.jpg'
import pr2 from '../images/home-our-product2.jpg'
import pr3 from '../images/home-our-product3.jpg'
import pr4 from '../images/home-our-product4.jpg'
import pr5 from '../images/home-our-product5.jpg'
import pr6 from '../images/home-our-product6.jpg'


function Slidess() {
  return (
     
    <Slide slidesToScroll={3} slidesToShow={3} indicators={true}>
    <div style={{
textAlign: 'center',
background : 'white',
padding: '10px 0',
borderBottom:'1px solid grey ',
marginLeft:'30px',
 marginRight:'30px'


}}><img src={pr} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr' />
   <h5>SPICES</h5>
   <p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
   <button className='read-more-btn'>Read more</button>
</div>
    <div style={{
 textAlign: 'center',
 background : 'white',
 padding: '10px 0',
 borderBottom:'1px solid grey ',
marginLeft:'20px',
 marginRight:'20px'
}}><img src={pr2} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }}className='img-hvr'  />
 <h5>OIL SEEDS</h5>
 <p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
 <button className='read-more-btn'>Read more</button>
</div>
    <div style={{
 textAlign: 'center',
 background : 'white',
 padding: '10px 0',
 borderBottom:'1px solid grey ',
 marginLeft:'30px',
 marginRight:'30px'
}}><img src={pr3} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
<h5>PULSES AND GRAINS</h5>
<p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
<button className='read-more-btn'>Read more</button>
</div>
    <div style={{
textAlign: 'center',
background : 'white',
padding: '10px 0',
borderBottom:'1px solid grey ',
marginLeft:'20px',
 marginRight:'20px'
}}><img src={pr4} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
<h5>DRY FRUITS</h5>
<p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
<button className='read-more-btn'>Read more</button>
</div>
    <div style={{
 textAlign: 'center',
 background : 'white',
 padding: '10px 0',
 borderBottom:'1px solid grey ',
 marginLeft:'20px',
 marginRight:'20px'
}}><img src={pr5} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr'  />
<h5>FOOD PRODUCTS</h5>
<p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
<button className='read-more-btn'>Read more</button>
</div>
    <div style={{
 textAlign: 'center',
 background : 'white',
 padding: '10px 0',
 borderBottom:'1px solid grey ',
 marginLeft:'20px',
 marginRight:'30px'
}}><img src={pr6} alt="img1" style={{ width: '300px', height: '200px',paddingLeft:"15px" }} className='img-hvr' />
<h5>HERBS</h5>
<p className='slide-p'>Royaldivine Produce Products LLP are reckoned as a prime Dry Fruits Exporter and Stockist in India. The Dry Fruits, offered by us, are available in a wide variety, which is highly demanded amidst the widespread clients. </p>
<button className='read-more-btn'>Read more</button>
</div>
    

</Slide>
   
);
}



export default Slidess