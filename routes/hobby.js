var express = require('express');
var router = express.Router();
var Dancing = require('../models').Dancing;


// var dances = [
//   {id: 1, title: "Tango", origin: " "},
//   {id: 2, title: "Maruni", origin: "Nepal"},
//   {id: 3, title: "Modern Dance", origin: " "}
// ]

router.get('/', function(req, res){
  Dancing.all()
    .then(function(dances){
      res.render('hobby',{hobby: dances});
    })
  // res.render('hobby', {hobby: dances});
});

router.post('/', function(req, res){
  var title = req.body.title;
  var origin = req.body.origin;
  Dancing.create({title: title, origin: origin})
  .then(function(){
    res.redirect('/hobby');
  });
});

router.delete('/:id',function(req, res){
  Dancing.findById(req.params.id)
  .then(function(hobby){
    hobby.destroy()
  })
  .then(function(){
    return res.redirect('/hobby');
  });
});

router.get('/:id/edit', function(req, res){
  Dancing.findById(req.params.id)
  .then(function(hobby){
    return res.render('edit', {hobby: hobby});
  });
});

router.put('/:id', function(req, res){
  Dancing.update(
    {title: req.body.title},
    {where: {id: req.params.id}}
  )
  .then(function(){
    return res.redirect('/hobby');
  });
});



module.exports = router;
