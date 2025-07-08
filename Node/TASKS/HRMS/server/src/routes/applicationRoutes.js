const express = require("express");
const router = express.Router();
const {applyForm} = require("../controllers/applicationController")

router.post("/apply" , applyForm);

module.exports = router;