const mongoose = require("mongoose")
const { ApolloServer } = require("apollo-server")

const typeDefs = require("../graphql/typeDefs")
const resolvers = require("../graphql/resolvers")

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const url = "mongodb+srv://admin:admin@cluster0.pk2l5qk.mongodb.net/GraphQL?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected")
        return server.listen({ port: 5000 })
    })
    .then((res) => console.log(`Server running at ${res.url}`))
    .catch((err) => console.log(err))