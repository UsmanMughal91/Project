import expree from 'express';
const router = expree.Router();  
import userController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth_middleware.js';


// route level middleware - to protect route
// router.use('/changUserPassword',checkUserAuth)
router.use('/loggedUser', checkUserAuth)

//public routes
router.post('/register',userController.userRegistration)
router.post('/login', userController.userLogin)
router.post('/send-user-password-reset-email', userController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',userController.userPasswordReset)
//protected routes

router.post('/changUserPassword', userController.changeUserPassword)
router.get('/loggedUser', userController.loggedUser)


export default router