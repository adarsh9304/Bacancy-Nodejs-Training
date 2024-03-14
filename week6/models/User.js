const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["Buyer", "Seller", "Admin"],
    required: true
  }
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports=User;