import React from 'react';
import './logistics.css';

const Logistic=()=>(
<React.Fragment>
<h2>Trucks</h2>
<div className='row apartment'>
    
      <div className='col-sm-6'>
        <img src="/img/oiltruck.jpg" className='rover'/>
      </div>
      <div className='col-sm-6'>
         <img src="/img/trailer2c.jpg"/>
      </div>
      <p>We are fully on site ready to shuttle your goods and crude oil from any location within the country. We are ever ready to serve you with our trucks which are very efficient and duely reliable. </p>
    </div>
    <h2>Air Freight</h2>
    <div className='row apartment'>
    
      <div className='col-sm-6'>
        <img src="/img/air1.jpg" className='rover'/>
      </div>
      <div className='col-sm-6'>
         <img src="/img/air2.jpg"/>
      </div>
      <p>We also move your goods from every part of the world with our flights. We are ever ready to serve you from every point of call,often in a timely manner. </p>
    </div>
    <h2>Cargo Freight</h2>
    <div className='row apartment'>
    
    <div className='col-sm-6'>
      <img src="/img/cargo1c.jpg" className='rover'/>
    </div>
    <div className='col-sm-6'>
       <img src="/img/oilship.jpg"/>
    </div>
    <p>Our ships are fully functional and reliable to deliver your products/crude oil from any part of the world. Your consignment is duely safe with us.</p>
  </div>
</React.Fragment>
);

export default Logistic;