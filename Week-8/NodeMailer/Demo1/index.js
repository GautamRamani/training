var express = require("express");
var http = require("http")
var path = require("path")
var nodemailer = require("nodemailer")

var app = express();
var server = http.Server(app)
var port = 500

app.set("port", port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "static")))

//Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "static/index.html"))
})

app.post("/send_email", function(req, response){
    var from = req.body.from
    var to = req.body.to
    var subject = req.body.subject
    var message = req.body.message

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gautam.ramani06@gmail.com',
          pass: 'jrokfxqnjnitmgdj'
        }
    })

    var mailOptions = {
        from: "gautam.ramani06@gmail.com",
        to:"gautam.ramani06@gmail.com",
        subject:"Sending a mail with the help of Nodemailer",
        text:"All glory comes from daring to begin !!"
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
})

//Initialize Web Server
server.listen(port, function(){
    console.log("starting server on port " + port)
})
console.clear()