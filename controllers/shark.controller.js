const Shark = require('../models/shark')

exports.index = (req, res) => {
  Shark.find({}).exec(function(err, sharks){
    if(err) return res.send(500, err)
    res.render('sharks',{sharks})
  })
}