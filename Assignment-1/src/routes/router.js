const {Router}=require('express');
const controller=require('../controllers/controller');

const router=Router();

router.post('/signup',controller.signup);

router.post('/login',controller.login);

router.get('/details',controller.details);

module.exports=router;