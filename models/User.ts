import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  email_address: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
}

/* NoteSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema<Users>({
    email_address: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide an email address for this user"],
  },
  first_name: {
    type: String,
    required: [true, "Please provide first name for this user."],
  },
  last_name: {
    type: String,
    required: [true, "Please provide first name for this user."],
  },
  profile_image_url: {
    /* Url to note image */
    required: [true, "Please provide an profile_image_url url for this user."],
    type: String,
  }
});

export default mongoose.models.User || mongoose.model<Users>("User", UserSchema);