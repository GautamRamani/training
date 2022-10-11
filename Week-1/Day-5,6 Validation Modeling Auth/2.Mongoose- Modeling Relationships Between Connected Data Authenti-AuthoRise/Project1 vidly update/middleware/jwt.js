const {expressjwt:expressjwt}=require("express-jwt")

function authJwt(){
    const secret=process.env.secret;
    // const api=process.env.APU_URL;
    return expressjwt({
        secret,
        algorithms:["HS256"],
    }).unless({
        path:[
            `/user/login`,
            `/user/register`,
        ],
    });
}

module.exports=authJwt;