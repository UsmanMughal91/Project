import expree from 'express';
const router = expree.Router();
import ExpertController from '../controllers/ExpertController.js';
import checkUserAuth from '../middlewares/auth_middleware.js';


// route level middleware - to protect route
router.use('/changUserPassword', checkUserAuth)
router.use('/loggedUser', checkUserAuth)

//public routes
router.post('/register', ExpertController.userRegistration)
router.post('/login', ExpertController.userLogin)
router.post('/send-user-password-reset-email', ExpertController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', ExpertController.userPasswordReset)
//protected routes

router.post('/changUserPassword', ExpertController.changeUserPassword)
router.get('/loggedUser', ExpertController.loggedUser)

export default router