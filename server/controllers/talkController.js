const catchAsync = require('./../utils/catchAsync');
const Talk = require('./../models/talkModel');


// @route    POST api/posts
// @desc     Create a post
// @access   Private
exports.postTalk= catchAsync(async (req, res) => {
   
   //console.log(req.body);
   
      const newTalk = new Talk({
        firstname: req.body.firstname,
       
        email: req.body.email
        
      });

      const talks = await newTalk.save();

      res.json(talks);
   
  }
);
