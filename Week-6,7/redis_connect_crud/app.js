const express = require('express')
const redis = require("redis");
const bodyParser = require('body-parser')

const app = express()
const port = 3000

//redis connection connect 0 index db
const client = redis.createClient({
    url: "redis://localhost:6379"
})

client.connect()
client.on('connect', function () {
    console.log("Connection established...");
})

client.on('error', function (err) {
    console.log("Redis error: " + err);
})

app.use(express.json())
app.use(bodyParser.json());

app.post('/store', async (req, res) => {
    const { key, value } = req.body;

    // Store JSON object in Redis
    let resp = await client.set(key, JSON.stringify(value));
    if (resp !== 'Ok') return res.status(500).json(resp);
    return res.status(200).json(resp);
});

app.get("/getData", async (req, res) => {
    const { key } = req.body;
    let result = await client.get(key)
    if(!result) return res.status(500).json(result);
    return res.status(200).json(JSON.parse(result))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))