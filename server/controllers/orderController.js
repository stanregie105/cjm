
const catchAsync = require('./../utils/catchAsync');
const Order = require('./../models/orderModel');


// @route    POST api/posts
// @desc     Create a post
// @access   Private
exports.postOrder= catchAsync(async (req, res) => {
   
   //console.log(req.body);
   
      const newOrder = new Order({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        telephone: req.body.telephone,
        email: req.body.email,
        order: req.body.order
      });

      const orders = await newOrder.save();

      res.json(orders);
   
  }
);
