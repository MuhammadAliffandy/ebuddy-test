import * as express from 'express';
import { userController } from '../userController';
import authorization from '../../middleware/authMiddleware';
const router = express.Router()

router
.get('/',userController.fetchUsersController)
.get('/current',authorization,userController.fetchUserController)
.patch('/:id', authorization , userController.updateUsersController)
.post('/', authorization ,userController.createValidation , userController.createUserController)

export default router;

