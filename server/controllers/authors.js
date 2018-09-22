var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports = {

    index: (req, res) => {
        Author.find({}, function(err, auth) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('got Authors', auth);
                res.json(auth);
            }
        })
    },

    create: (req, res) => {
        var myAuthor = new Author(req.body);
        myAuthor.save(function(err, auth) {
            if (err) {
                console.log("Error", err);
                res.json(err)
            } else {
                console.log("Created an Author");
                res.json(auth);
            }
        })
    },

    specific: (req, res) => {
        Author.findOne({_id: req.params.id}, function(err, auth) {
            if (err) {
                console.log("you have errors");
                res.json(err);
            } else {
                console.log("you got em specific");
                res.json(auth);
            }
        })
    },

    edit: (req, res) => {
        Author.findOne({_id: req.params.id}, function(err, auth) {
            auth.name = req.body.name;
            auth.save(function(err) {
                if (err) {
                    console.log("errors getting one", err);
                    res.json(err);
                } else {
                    console.log('good job', auth);
                    res.json(auth);
                }
            })
        })
    },

    delete: (req,res) => {
        Author.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Task Deleted"});
            }
        })
    }

}