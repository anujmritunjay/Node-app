const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello from the node-app server. update and hello world....!"
    })
})


app.listen(8089, () => console.log(`Server is running on port 8089`))