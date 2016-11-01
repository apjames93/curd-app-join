var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('author').innerJoin("author_book", 'author_id', 'author.id').innerJoin('book','book_id', 'book.id').then(function(data){

      res.render('index', { title: data });
  });
});

router.get('/addbook', function(req, res, next){
  res.render('addbook');
});

router.post('/addbook', function(req,res, next){
  knex('author').select().where({first_name: req.body.first_name, last_name: req.body.last_name})
  .then(function(data){
    if(data[0]=== undefined){
  knex('author').insert({first_name: req.body.first_name, last_name: req.body.last_name})
  .then(function(data){
    knex('book').select().where({title: req.body.title , description: req.body.description})
    .then(function(data){
      console.log(data);
      res.redirect('/addbook')
    })

    //TODO: add part of from in addbook.hbs
    // find if book in in database
    // if it is dont add it
    // else add it
    //.then add the id of the new or returned book to the author_book join to disply on the index
    //
    console.log(data.id);
    res.redirect('/');
    });
    }else{
      console.log(data);
    res.redirect('/');
    }
  })
})


module.exports = router;
