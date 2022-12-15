const express = require('express')
const router = express.Router();

const levalroute = require("../Controller/Leval")
const pointroute = require("../Controller/point")

const appRoutes = [
    {
        path: "/",
        routes: levalroute
    },
    {
        path: "/",
        routes: pointroute
    }
]

appRoutes.forEach(({ path, routes }) => {
    router.use(path, routes)
})

module.exports = router;
