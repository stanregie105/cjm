
import React, {Component} from 'react';
//import { NavbarBrand, Jumbotron} from 'reactstrap';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
         <footer className="footer">
        <div className="container">
       
                <div class="col-12 col-sm align-self-center">
                    <div class="text-center">
                        <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/chiuba-ikpeama-367aa314b/"><i class="fa fa-linkedin fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                        <a class="btn btn-social-icon" href="mailto:stanleyregal004@yahoo.com"><i class="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                </div>
              
        </div>
    </footer>
    
    </React.Fragment>
    
    );
}
}

export default Footer;