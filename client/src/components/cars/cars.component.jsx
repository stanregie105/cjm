import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../../actions/index";
import { Card, CardImg, CardImgOverlay, CardTitle, Media} from "reactstrap";

const Car = ({ cars, fetchCars }) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
  console.log(cars);
  if (cars === undefined || cars === null) {
    return <div></div>;
  }
  
  return (
    <div className="row">
        <div className='container'>
      <h1>CARS</h1>
      {cars.map(({ id, image, name }) => (
        <div key={id} className="col-12 col-md-6 home-container">
          <Card>
            <CardImg width="30%" src={image} alt={name} />
            <CardImgOverlay>
              <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      ))}
      </div>
    </div>
    )
   
  /*
        return(
           
            <React.Fragment>
                <div className='row'>
                <div className='container'>
                <Media list className='mt-5'>  
               {cars.map(({id,image, name,description})=>{
            return(
              <div key={id} className='col-12'>
                  
                    <Media tag='li'>
                    <Media left middle>
                        <Media object src={image} alt={name}/>
                    </Media>
                    <Media body className='ml-5'>
                        <Media heading>{name}</Media>
                        <p>{description}</p>
                    </Media>
                    </Media>
                   
                    </div>
            );
               })};
                </Media>
                </div>
                 </div>
                 
                </React.Fragment>
           
            );
            */
            
  
};

const mapStateToProps = (state) => ({
  cars: state.cars,
});

export default connect(mapStateToProps, { fetchCars })(Car);
