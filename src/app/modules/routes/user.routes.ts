import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/api/users', UserControllers.createUser);
router.get('/api/users', UserControllers.getAllUser);
router.get('/api/users/:userId', UserControllers.getSingleUser);
router.put('/api/users/:userId', UserControllers.updateUser);
router.delete('/api/users/:userId', UserControllers.deleteUser);
router.get('/api/users/:userId/orders', UserControllers.getAllOrderFromUser);
router.put('/api/users/:userId/orders', UserControllers.orderUpdate);
router.get(
  '/api/users/:userId/orders/total-price',
  UserControllers.orderTotalPrice,
);
export const UserRoutes = router;
