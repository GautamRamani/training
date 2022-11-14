const express = require('express');
const axios = require('axios');
const redis = require('redis');
const morgan = require("morgan");
const app = express();
app.use(morgan("tiny"))

const client = redis.createClient({
  url: "redis://localhost:6379"
});

client.connect();
client.on('connect', function () {
  console.log('Connected to Redis...')
})
client.on('error', (err) => console.log("Redis Client Error", err))

const PORT = 3001;
const MOCK_API = "https://jsonplaceholder.typicode.com/users/";


app.get('/user/:email', async (req, res) => {
  const email = req.params.email;

  try {
    const response = await axios.get(`${MOCK_API}?email=${email}`);
    const user = response.data
    console.log("User successfully retrieved from the API");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api",async(req,res)=>{
  try {
    const data=await client.get("key1")
    if(!data){
      console.log("call api")
      const {data}=await axios.get(MOCK_API)
      client.set("key1",JSON.stringify(data))
      res.send(data)
    }
    res.send(JSON.parse(data))
  } catch (ex) {
    console.log("error",ex)
  }
})

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});