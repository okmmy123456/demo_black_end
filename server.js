const express = require('express')
const app = express()






app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./controller'))


//test


const PORT = process.env.PORT || 1150
app.listen(PORT, () => {
     const env = process.env.NODE_ENV || 'development'
     console.log("App listening on port" + PORT);
     console.log("App listening on env" + env);
     console.log("Press ctrl+c to quit");
})