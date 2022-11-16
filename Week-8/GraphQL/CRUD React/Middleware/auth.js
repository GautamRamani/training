const {AuthnticationError}=require("apollo-server")

const jwt=require("jsonwebtoken")

module.exports=(context)=>{
    //context={...headers}
    const authHeader=context.req.headers.authorization;
    if(authHeader){
        //Bearer ....
        const token=authHeader.split("Bearer")[1];  //Bearer DMNFNG<MNNKLNKLN<MSADFM
        if(token){
            try {
                const user=jwt.verify(token,"UNSAFE_STRING")
                return user;
            } catch (err) {
                throw new AuthnticationError("Invalid/Expired token")
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]")
    }
    throw new Error("Authorization header must be provided")
}