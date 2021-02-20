const express = require('express');
const talkController = require('./../controllers/talkController');


const router = express.Router();

router
  .route('/')
  .post(
    talkController.postTalk
  );

  module.exports = router;