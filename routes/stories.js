
var express = require('express');
var router = express.Router();
const jwt = require('jwt-simple');
const jwtCheck = require('express-jwt');
const passport = require('../passport-config/passport')
const config = require('../passport-config/config');
const User = require('../models').User;
const Story = require('../models').Story;




/* GET STORIES */
router.get('/', (req, res) => {
    Story.findAll()
      .then(stories => {
        res.json({ stories })
      })
  });



// CREATE A STORY
router.post('/', function (req, res, next) {
    Story.create(req.body.newStory)
      .then(story => {
        res.json({ story })
      })
  });



// DELETE A STORY
router.delete('/:id', (req, res) => {
    Story.destroy({ where: { id: req.params.id } })
      .then(() => {
        return Story.findAll()
      })
      .then(story => {
        res.json({ story })
      })
  })



  module.exports = router;