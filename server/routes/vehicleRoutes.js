
const express = require('express');
const vehicleController = require('./../controllers/vehicleController');
const authController = require('./../controllers/authController');
//const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// router.param('id', vehicleController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

//router.use('/:tourId/reviews', reviewRouter);

//router
  //.route('/')
  //.get(vehicleController.getAllTours);

router.route('/vehicle-stats').get(vehicleController.getVehicleStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    vehicleController.getMonthlyPlan
  );

router
  .route('/vehicles-within/:distance/center/:latlng/unit/:unit')
  .get(vehicleController.getVehiclesWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(vehicleController.getDistances);

router
  .route('/')
  .get(vehicleController.getAllVehicles)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    vehicleController.createVehicle
  );

router
  .route('/:id')
  .get(vehicleController.getVehicle)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    vehicleController.uploadVehicleImages,
    vehicleController.resizeVehicleImages,
    vehicleController.updateVehicle
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    vehicleController.deleteVehicle
  );

/*
  router
   .route('/:tourId/reviews')
   .post(
    authController.protect,
    authController.restrictTo('user')
    reviewController.createReview
   );
*/

module.exports = router;
