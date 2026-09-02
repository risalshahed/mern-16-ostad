import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Add a name kindly']
  },
  email: {
    type: String,
    required: [true, 'Add an email kindly'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Add a password kindly'],
    minLength: 6,
    // Don't Return the Password by default in Database Query
    select: false
  },
  // Reset Password
  resetPasswordToken: String,
  resetPasswordExpire: Date,
})

// Hash Password Before Saving

// userSchema.pre('save', async function (next) {
// ***************** From Version "9", Mongoose doesn't support "next()" callback anymore from their "pre" middleware. This was the bug while testing in the Live Project Class *****************
userSchema.pre('save', async function () {
  if( !this.isModified('password') ) return;

  /* 
  let x = 5;
  x = 10;
  */

  // else
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // next();  ***** Not Required anymore from Mongoose Version "9"
})

// Match User Entered password to hashed password in Database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema);