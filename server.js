const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello from the nodeddddd-app server. update"
    })
})


app.listen(8085, () => console.log(`Server is running on port 8085`))