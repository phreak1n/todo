module.exports = function (app) {

  app.get('/', function(req,res) {
    console.log('GET /');
    console.log('redirect to /todo');    
    console.log(req.url);
    res.redirect('/todo');
  });

};
