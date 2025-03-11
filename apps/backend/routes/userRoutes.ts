import * as express from 'express';
import users from '../controller/api/api';
const router = express.Router()

router.use('/users', users);

export default router;

