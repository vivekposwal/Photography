const express = require("express");
const { CreateQuery } = require("../controllers/queryControllers");
const router = express.Router();
router.route("/create").post(CreateQuery);
module.exports = router;
