const {Router}=require('express');
const controller=require('./controller');
const router=Router();

router.get('/',controller.getcar);

router.get('/:id',controller.getcarid);

router.post('/',controller.addstudent);

router.delete('/:id',controller.removecar);

module.exports=router;