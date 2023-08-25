import jwt from 'jsonwebtoken';

function verifyToken(token) {
    if (!token) return { error: "Unauthorised Access" }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log("decoded", decoded);
        return { user: decoded }
    } catch (ex) {
        console.log(ex);
        return { error: "Unauthorised Access" }
    }
}

export default verifyToken;
