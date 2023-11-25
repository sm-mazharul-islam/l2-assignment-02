/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import userValidationSchema from '../validation/user.validation';
const createUser = async (req: Request, res: Response) => {
  try {
    // const user = req.body.user;
    const { user: userData } = req.body;

    // data validation using zod
    const zodParseData = userValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDB(zodParseData);

    //send response
    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: 'User are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserServices.getSingleUserFromDB(parseInt(id));
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User are retrieved successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: 'false',
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: any) {
    console.log(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { userId } = req.params;

    const result = await UserServices.updateUser(userId, userData);
    if (result) {
      res.status(200).json({
        status: 'success',
        message: 'User updated successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: 'false',
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: any) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.userId;
  try {
    const result = await UserServices.deleteUser(Number(id));
    if (result) {
      res.status(200).json({
        status: 'success',
        message: 'User deleted successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: 'false',
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: any) {
    // console.log(error);
  }
};

export const UserControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
