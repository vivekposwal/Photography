const express = require("express");
const { CreateQuery } = require("../controllers/noteControllers");
const router = express.Router();
router.route("/create").post(CreateQuery);
module.exports = router;
