var authors = require('./../controllers/authors.js');
var path = require('path');
module.exports = function(app){

    app.get('/authors', authors.index);
    app.post('/authors', authors.create);
    app.get('/authors/:id', authors.specific);
    app.put('/edit/:id', authors.edit);
    app.delete('/delete/:id', authors.delete);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}