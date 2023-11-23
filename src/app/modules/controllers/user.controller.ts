import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    // const user = req.body.user;
    const { user: userData } = req.body;
    const result = await UserServices.createUserIntoDB(userData);

    //send response
    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
};
