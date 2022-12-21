import expree from 'express';
const router = expree.Router();
import AboutExpertController from '../controllers/AboutExpertController.js';


router.post('/aboutMe',AboutExpertController.aboutMe)



export default router