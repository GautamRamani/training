const express=require("express")
const router=express.Router();
const {User,Post}=require("../Model/model")

router.get('/', (req, res) => {
    res.send([1, 2, 3]);
})

// // POST request for first user
router.post('/user', (req, res) => {
    var newUser = new User({
        name: req.body.name
    });
    newUser.save().then(user => {
        res.send(user);
    }, (e) => {
        res.status(400).send(e);
    });
});

// // POST request for post
router.post("/postById/:id", (req, res) => {
    // Create post and saving
    let _id= req.params.id;
    var post = new Post({
        title: req.body.title,
        postedBy: _id,
        comments: [{
            text: req.body.comments[0].text,
            postedBy: req.body.comments[0].postedByUserId
        }]
    });
    post.save().then(post => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    }
    );
})

//     //find

    router.get("/user", (req, res) => {
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

//     //findone
    router.get('/user/id/:id', (req, res) => {
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

//     //findById
    router.get('/user/:id', (req, res) => {
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


//     //update
    router.put('/user/id/:id', (req, res) => {
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

//     // findOneAndUpdate
    // router.put('/user/:id', (req, res) => {
    //     // updating a record    
    //     User.findOneAndUpdate({
    //         _id: req.params.id
    //     },
    //         {
    //             name: req.body.name
    //         });
    // });

//     //findByIdAndUpdate  ....
    //    router.put('/user/id/:id', (req, res) => {    
    //     // updating a record     
    //     User.findByIdAndUpdate({         
    //       _id: req.params.id},{          
    //       $set:{         
    //          name: req.body.name // updating record via MongoDB operators         
    //       }},         
    //       {           
    //          new: true // return updated record         
    //       } 
    //      // callback is optional   
    //     );
    //    });

//     //DELETE RECORD 
    // router.delete('/user/id/:id', (req, res) => {
    //     // deleting a record     
    //     User.remove({ _id: req.params.id })
    //         .then(() => {
    //             // some code
    //         });
    //     // OR 
    //     // deleting all records
    //     User.remove({})
    //         .then(() => {
    //             // some code
    //         });
    // });

//     findOneAndRemove()
    // router.delete('/user/id/:id', (req, res) => {
    //     // deleting a record    
    //     User.findOneAndRemove({ _id: req.params.id })
    //         .then((user) => {
    //             if (!user) {
    //                 res.status(404).send();
    //             }
    //             res.send(user);
    //         }).catch((e) => {
    //             res.status(400).send(e);
    //         });
    // });

//     //findByIdAndRemove()
    router.delete('/user/id/:id', (req, res) => {
        // deleting a record 
        let _id= req.params.id;
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

module.exports=router;