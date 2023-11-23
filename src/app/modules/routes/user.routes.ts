import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/api/users', UserControllers.createUser);
router.get('/api/users', UserControllers.getAllUser);
router.get('/api/users/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
