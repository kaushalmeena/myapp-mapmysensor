import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import mongoose, { Mongoose } from 'mongoose';
import config from '../config';
import UserModel, { User } from '../models/user';
import { JWTPayload, Context } from '../types';

export const getUser = async (token: string): Promise<User | null> => {
  let user = null;
  if (token) {
    try {
      const { userId } = jwt.verify(token, config.jwtSecret) as JWTPayload;
      user = await UserModel.findById(userId);
    } catch (e) {
      throw new AuthenticationError('Your session expired, sign in again.');
    }
  }
  return user;
};

export const connectDatabase = (): Promise<Mongoose> => mongoose.connect(config.mongoConnectionString);
