import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/api/users', UserControllers.createUser);
router.get('/api/users', UserControllers.getAllUser);
router.get('/api/users/:userId', UserControllers.getSingleUser);
router.put('/api/users/:userId', UserControllers.updateUser);
router.delete('/api/users/:userId', UserControllers.deleteUser);
// router.put('/api/users/:userId/orders'UserControllers.createOrders);

export const UserRoutes = router;
