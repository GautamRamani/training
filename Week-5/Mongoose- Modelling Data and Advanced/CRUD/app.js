const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
require('./model');
const User = require('./User');
const Post = require('./Post');

mongoose.connect('mongodb://localhost/SocialMediaApp_db')
    .then(() => console.log("Database Connected Succefully"))
    .catch((err) => console.log(err))


app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send([1, 2, 3]);
})

// POST request for first user
app.post('/user', (req, res) => {
    var newUser = new User({
        name: req.body.name
    });
    newUser.save().then(user => {
        res.send(user);
    }, (e) => {
        res.status(400).send(e);
    });
});

// POST request for post
app.post('/post/id/:id'), (req, res) => {
    // Create post and saving
    _id: req.params.id;
    var post = new Post({
        title: req.body.title,
        postedBy: _id,
        comments: [{
            text: req.body.comments[0].text,
            postedBy: req.body.postedByUserId
        }]
    });
    post.save().then(post => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    }
    );
}
    //find

    app.get("/user", (req, res) => {
        User.find({})
            .then(user => {
                if (!user) {
                    res.status(404).send();
                }
                res.send(user);
            }).catch((e) => {
                res.status(400).send(e);
            });
    });

    //findone
    app.get('/user/id/:id', (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => {
                if (!user) {
                    res.status(404).send();
                }
                res.send(user);
            }).catch((e) => {
                res.status(400).send(e);
            });
    });

    //findById
    app.get('/user/id/:id', (req, res) => {
        User.findById({ _id: req.params.id })
            .then(user => {
                if (!user) {
                    res.status(404).send();
                }
                res.send({ user });
            }).catch((e) => {
                res.status(400).send(e);
            });
    });


    //update
    app.put('/user/id/:id', (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => {
                // new values
                user.name = req.body.name;
                user.save()
                    .then(user => {
                        res.send(user);
                    }).catch((e) => {
                        res.status(400).send(e);
                    })
            });
    });

    // findOneAndUpdate
    app.put('/user/id/:id', (req, res) => {
        // updating a record    
        User.findOneAndUpdate({
            _id: req.params.id
        },
            {
                name: req.body.name
            });
    });

    //findByIdAndUpdate
    //    app.patch('/user/id/:id', (req, res) => {    
    //     // updating a record     
    //     User.findByIdAndUpdate(         
    //       _id: req.params.id,          
    //       $set:{         
    //          name: req.body.name // updating record via MongoDB operators         
    //       },         
    //       {           
    //          new: true // return updated record         
    //       } 
    //      // callback is optional   
    //     );
    //    });

    //DELETE RECORD 
    app.delete('/user/id/:id', (req, res) => {
        // deleting a record     
        User.remove({ _id: req.params.id })
            .then(() => {
                // some code
            });
        // OR 
        // deleting all records
        User.remove({})
            .then(() => {
                // some code
            });
    });

    findOneAndRemove()
    app.delete('/user/id/:id', (req, res) => {
        // deleting a record    
        User.findOneAndRemove({ _id: req.params.id })
            .then((user) => {
                if (!user) {
                    res.status(404).send();
                }
                res.send(user);
            }).catch((e) => {
                res.status(400).send(e);
            });
    });

    //findByIdAndRemove()
    app.delete('/user/id/:id', (req, res) => {
        // deleting a record 
        _id: req.params.id;
        User.findByIdAndRemove(_id)
            .then((user) => {
                if (!user) {
                    res.status(404).send();
                }
                res.send(user);
            }).catch((e) => {
                res.status(400).send(e);
            });
    });

    app.listen(port, () => {
        console.log(`listening on port ${port}!`);
    })