import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;