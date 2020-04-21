import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { USER_TYPES } from '../constants';

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop({ enum: USER_TYPES, default: USER_TYPES.USER })
  role: USER_TYPES;
}

const userModel = getModelForClass(User);

export default userModel;
