const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerConfig = require('./config/multer_config')
const upload = multer(multerConfig.config).array(multerConfig.keyUpload, 3)


//get
router.get('/pr', (req, res) => {
     res.send('get product')
})

//upload
router.post('/pr/:id', (req, res) => {
     upload(req, res, (err) => {
          if (err instanceof multer.MulterError) {
               console.log(JSON.stringify(err))
          } else if (err) {
               console.log(JSON.stringify(err))
          }


     })
     const filename = req.file ? req.file.fieldname : undefined
     // console.log(req.body)
     res.send('POST Product' + req.params.id + "," + filename)
})

module.exports = router