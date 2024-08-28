import React, { useState } from 'react';
import './header.css';
import Fb from '../img-cmp/facebook-app-symbol.png'
import Mobile from '../img-cmp/smartphone.png'
import Headerroyal from '../img-cmp/Headerroyal-icon.png';
import email from '../img-cmp/email.png';
import google from '../img-cmp/google-plus.png';
import twitter from '../img-cmp/twitter.png';
import linkedin from '../img-cmp/linkedin.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'transparent', // Set background to transparent
        boxShadow: 'none', // Remove any shadow (box effect)
        border: 'none', // Remove any border
        ...theme.typography.body2,
        borderRadius:'0',
        padding: theme.spacing(1),
       
        color: theme.palette.text.secondary,
      }));
      const [color, setColor] = useState('#1f2d6b');

  const handleClick = () => {
    setColor(prevColor => (prevColor === 'blue' ? 'green' : 'blue'));
  };

  return (
//     <div className='container'>
   
//          <div className="left-content">
  
//     <p> <img src={email} alt="fb" style={{ width: '12px', height: 'auto',paddingRight:"5px" }} />
//         Email: sales@royaldryfruit.com 
//         <img src={ Mobile} alt="fb" style={{ width: '12px', height: 'auto', marginLeft
//             :'10px',paddingRight:"5px" }} />
//         Mobile: +91 8451878725</p>
//   </div>
//   <div className="right-content">
  
//     <p>Follow Us On:
//     <img src={Fb} alt="Fb" style={{ width: '12px', height: 'auto',paddingLeft:"7px" }} />
//     <img src={twitter} alt="twitter" style={{ width: '12px', height: 'auto',paddingLeft:"7px" }} />
//     <img src={linkedin} alt="linkedin" style={{ width: '12px', height: 'auto',paddingLeft:"7px" }} />
//     <img src={google} alt="google" style={{ width: '12px', height: 'auto',paddingLeft:"7px" }} />
//     </p>
//   </div> 
  <Box sx={{ flexGrow: 1 }} className="box-header">
      <Grid container spacing={0} className='grid-container-header'>
        <Grid item lg={6} sm={6} xs={6}  className="left-content">
          <Item className='grid-item1'>
           <img src={email} alt="fb" style={{ width: '12px', height: 'auto',paddingRight:"5px" }} />
          Email: sales@royaldryfruit.com 
        
         
          <img src={ Mobile} alt="fb" style={{ width: '12px', height: 'auto', marginLeft
            :'10px',paddingRight:"5px" }} />
        Mobile: +91 8451878725
         </Item>
        </Grid>
        <Grid item  lg={6} sm={4} xs={4} className="right-content">
          <Item className='grid-item2'>
             Follow Us On:
            
           
    <img src={Fb} alt="Fb" style={{ width: '12px', height: 'auto',paddingLeft:"15px" }} />
  
   
    <img src={twitter} alt="twitter" style={{ width: '12px', height: 'auto',paddingLeft:"15px" }} />
    
    
    <img src={linkedin} alt="linkedin" style={{ width: '12px', height: 'auto',paddingLeft:"15px" }} />
   
  
    <img src={google} alt="google" style={{ width: '12px', height: 'auto',paddingLeft:"15px" }} />
  
   
          </Item>
        </Grid>
        <Grid item xs={4} className='grid-item3'>
          <Item>
          <img src={Headerroyal} alt="Headerroyal" style={{ width: '65%', height: 'auto' }} />
          </Item>
        </Grid>
        <Grid item xs={8} className='grid-item4'>
          <Item> 
        <Container className='nav-container'>
          
          <Nav className="navbar">
           <Nav.Link href="#home" 
           onClick={handleClick}
           style={{ backgroundColor: color, padding: '10px', color: 'white', border: 'none' }}
         
           className='home-nav nv'>Home</Nav.Link>
            <Nav.Link href="#about" className='about-nav nv'
             
            >About us</Nav.Link>
            <Nav.Link href="#product" className='product-nav nv'>Products</Nav.Link>
            <Nav.Link href="#corporate"className='corporate-nav nv'>Corporate Gifting</Nav.Link>
            <Nav.Link href="#quality"className='quality-nav nv'>Quality Gifting</Nav.Link>
            <Nav.Link href="#contact"className='contact-nav nv'>Contact</Nav.Link>
           
          </Nav>
        </Container>
     
      </Item>
        </Grid>
      </Grid>
    </Box>
//  </div>
  

  )
}

export default Header
