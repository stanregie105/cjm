import React, { useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import './homepage.css';
import { connect } from 'react-redux';

import { addTalk } from '../../actions/talks';


const HomePage =({addTalk})=> {
  useEffect(()=>{
    addTalk();
  },[addTalk])
  const [formData, setFormData] = useState({
    firstname:'',
    
    email:''
   
  });
  
  const {firstname,email} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addTalk({firstname,email});
    setFormData({firstname:'', email:''});
  };
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 vision">
            <h2>Vision Statement</h2>
            <p>We aim to effectively satisfy our clients demands and make their needs our topmost priority. In summary, We are here to serve your needs. </p>
          </div>
        </div>
    <div className='top-item row'>
    <div className="col-12 col-md-6 mid-item">
            <h4>What We Offer</h4>
            <ul>
              <li>Logistics services within and outside the country </li>
              <li>Wholesale and retail services of our products such as cars, electronics, Fashion, medical equipments and lots more. </li>
              <li>IT Solutions and information security services.</li>
              <li>Consulting and Real Estates.</li>
              <li>Manufacturing.</li>
            </ul>
          </div>
      </div>
    <div className='next-item row'>
    <div className="col-12">
                    <h3>Get newsletters about our services and latest products</h3>
                </div>
        <div className="edit-form col-12">
        <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="name"
            placeholder="Name"
            name="firstname"
            value={firstname}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
     
        <input type="submit" className="btn btn-primary" value="Subscribe" />
      </form>
      </div>
    </div>
      </React.Fragment>
    );
  
}

export default withRouter(connect(
  null,
  { addTalk}
)(HomePage));
