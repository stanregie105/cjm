import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../../actions/index";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

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
    /*
        return(
           
            <React.Fragment>
                <div className='row'>
                    <Media list>
               {cars.map(car=>{
              <div key={car.id} className='col-12'>

                    <Media tag='li'>
                    <Media left middle>
                        <Media object src={car.image} alt={car.name}/>
                    </Media>
                    <Media body className='ml-5'>
                        <Media heading>{car.name}</Media>
                        <p>{car.description}</p>
                    </Media>
                    </Media>
                    </div>
                 
                 </Media>
                 </div>
                 
                </React.Fragment>
           
            )
            */
  );
};

const mapStateToProps = (state) => ({
  cars: state.cars,
});

export default connect(mapStateToProps, { fetchCars })(Car);
