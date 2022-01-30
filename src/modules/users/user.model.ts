import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cell: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export interface IUser extends Document {
  _id: Schema.Types.ObjectId | string;
  name: string;
  email: string;
  cell: string;
  age: number;
}
