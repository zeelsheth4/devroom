import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
    },

    skills: {
      type: String,
    },

    github: {
      type: String,
    },

    portfolio: {
      type: String,
    },

    availability: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);