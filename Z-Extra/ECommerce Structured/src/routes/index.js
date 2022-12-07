const router=require('express').Router();

const userRoutes=require("../Controller/users")
const productsRoutes=require("../Controller/products")
const registerRoutes=require("../Controller/register")
const loginRoutes=require("../Controller/login")

//client
const clientRoutes=require("../Controller/client")


const appRoutes=[
    {
        path:"/api",
        routes:userRoutes
    },
    {
        path:"/api",
        routes:productsRoutes
    },
    {
        path:"/register",
        routes:registerRoutes
    },
    {
        path:"/login",
        routes:loginRoutes
    },

        //Client Side
    {
        path:"/api",
        routes:clientRoutes
    },
]

appRoutes.forEach(({path,routes})=>{
    router.use(path,routes)
})

module.exports=router;