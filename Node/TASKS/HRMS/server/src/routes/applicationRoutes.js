const express = require("express");
const router = express.Router();
const {applyForm, getUserForms, formUpdate} = require("../controllers/applicationController")
const  {upload} = require('../middleware/multer')


router.post("/apply" , applyForm);

router.post("/uploadFile" , upload.single('cv'), (req, res) => res.send('donee'));

router.post("/uploadProfileImage" , upload.single('profileImage'), (req, res) => res.send('donee it'));

router.get('/getUserDetails', getUserForms)


router.put('/formUpdate/:id', formUpdate)


module.exports = router;