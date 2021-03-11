import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export interface User extends Document {
    email: string;
    firstName: string;
    lastName: string;
  }
export default mongoose.model('User', UserSchema);