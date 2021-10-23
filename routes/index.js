var express = require('express');
var router = express.Router();

const {Student} = require('../db/students');
const student = new Student();


router.get('/get-all', async (req, res) => {
 try{
   const students = await student.getAll();
   res.status(200).json(students);
 }catch(e){
   res.status(500).send(e);
 }
});
router.post('/save-user', student.createUser);
router.put('/update-user/:id', student.UpdateUser)
router.put('/update-geo/:id', student.UpdateGeo)
router.delete('/delete-user/:id', student.DeleteUser)
module.exports = router;
