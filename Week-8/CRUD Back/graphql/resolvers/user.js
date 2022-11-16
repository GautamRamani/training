const { create } = require("domain")
const User = require("../../Models/user")
const { ApolloError } = require("apollo-server-errors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: { username, email, password } }) {
            //see if an old user exists with email attempting to register
            const oldUser = await User.findOne({ email });

            //Throw error if that user exists
            if (oldUser) {
                throw new ApolloError("A user is already registered with the email" + email, "USER_ALREADY_EXISTS")
            }

            //Encrypt password
            var encryptedPassword = await bcrypt.hash(password, 10);

            //Build out mongoose model
            const newuser = new User({
                username: username,
                email: email.toLowerCase(),
                password: encryptedPassword
            })

            //create our jwt (attach to our user model)
            const token = jwt.sign(
                { user_id: newuser._id, email },
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            )

            newuser.token = token;
            //Save our user in MongoDB
            const res = await newuser.save();

            return {
                id: res.id,
                ...res._doc
            }
        },
        async loginUser(_, { loginInput: { email, password } }) {
            // See if a user exists with the email
            const user = await User.findOne({ email });

            // Check if the entred password eqals the encrypted password
            if (user && (await bcrypt.compare(password, user.password))) {
                // Create a NEW token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    "UNSAFE_STRING",
                    {
                        expiresIn: "2h"
                    }
                );
                //Attach token to user model we found above
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                // If a user dosen't exists, return error
                throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD")
            }
        }
    },
    Query: {
        user: (_, { ID }) => User.findById(ID)
    }
}