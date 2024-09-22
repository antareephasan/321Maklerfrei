const express = require('express');
const userListController = require('../../controllers/userList.controller');
const fileUpload = require('express-fileupload');

const router = express.Router();

router.use(fileUpload());
router.post('/create', userListController.createList);
router.post('/create_valuation', userListController.createListValuation);
router.post('/get', userListController.getList);
router.post('/immobilien', userListController.filterImmobilien);
router.post('/immobilien/contact', userListController.contactImmobilien);
router.post('/immobilien/:id', userListController.Immobilien);
router.get('/immobilien/recent', userListController.getRecentImmobilien);
router.get('/t-d-t', userListController.cognitoToken);
router.get('/img/:imgId', userListController.getImgList);
router.delete('/deleteList/:uniqId', userListController.deleteUserList); 
router.patch('/update/:uniqId', userListController.updateUserList);

//delete image and update
router.patch('/image', userListController.deleteImage);


module.exports = router;
