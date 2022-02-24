const router = require("express").Router();

router.use("/coasters", require('./coasters.routes'))

module.exports = router