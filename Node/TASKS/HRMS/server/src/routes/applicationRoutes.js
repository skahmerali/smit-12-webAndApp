const express = require("express");
const router = express.Router();
const { applyForm, getUserForms, formUpdate, deleteFormData } = require("../controllers/applicationController")
const { upload } = require('../middleware/multer');
const { createUser, inviteUser } = require("../controllers/authContrller");
const { sendInvite } = require("./../controllers/inviteCotroller")


router.post("/apply", applyForm);

router.post("/uploadFile", upload.single('cv'), (req, res) => res.send('donee'));

router.post("/uploadProfileImage", upload.single('profileImage'), (req, res) => res.send('donee it'));

router.get('/getUserDetails', getUserForms)


router.put('/formUpdate/:id', formUpdate)

router.delete('/deleteFormData/:id', deleteFormData)
router.post('/userData', createUser);
router.post("/inviteUser", inviteUser);
module.exports = router;