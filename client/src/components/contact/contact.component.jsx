import React, { useState,useEffect} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';


import { addPost } from '../../actions/posts';



const Contact=({addPost})=>{
  useEffect(()=>{
    addPost();
  },[addPost])
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    telephone:'',
    email:'',
    order:''
  });
  
  const {firstname,lastname,telephone,email,order} = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addPost({firstname,lastname,telephone,email,order});
    //setFormData('');
  };
  return(
<React.Fragment>
<div className="container">
            <div className ="row">
                  <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem>Contact Us</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Contact Us</h3>
                      <hr/>
                      </div>
                </div>
            <div className="row row-content">
                <div className="col-sm-4">
                </div>
                <div className="col-12 col-sm-6 ">
                         <h3>Location Information</h3>

                        <h5>Our Address</h5>
                        <address>
                        512 Rd, G close, Festac Town<br />
                           <br />
                        LAGOS<br />
                        <i className="fa fa-phone"></i>: +234 7031855342<br />
                        <i className="fa fa-fax"></i>: +234 8023058279<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:juliwillventures72@gmail.com">juliwillventures72@gmail.com</a>
                        </address>
                    <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+2347031855342"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:juliwillventures72@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
                </div>
               
               
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
        <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="name"
            placeholder="First Name"
            name="firstname"
            value={firstname}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="name"
            placeholder="Last Name"
            name="lastname"
            value={lastname}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Tel. Number"
            name="telephone"
            value={telephone}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
        <textarea
          name='order'
          cols='30'
          rows='5'
          placeholder='Comment the post'
          value={order}
          onChange={onChange}
          required
        />
        </div>
        <input type="submit" className="btn btn-primary" value="Order" />
      </form>
            </div>
        </div>
        </React.Fragment>
  )
};

export default connect(
  null,
  { addPost }
)(Contact);