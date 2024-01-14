const express = require("express");
const { testUserController } = require("../controllers/testController");
//Router Object
const router = express.Router();

//Router GET POST DELETE UPDATE
router.get("/test-user", testUserController);

//export
module.exports = router;
