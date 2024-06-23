import mongoose from "mongoose";

export interface Notes extends mongoose.Document {
  title: string;
  content: string;
  image_url: string;
  likes: number;
  dislikes: number;
}

/* NoteSchema will correspond to a collection in your MongoDB database. */
const NoteSchema = new mongoose.Schema<Notes>({
    title: {
    /* The name of this pet */
    type: String,
    required: [true, "Please provide a title for this note."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  content: {
    type: String,
    required: [true, "Please provide content for this note."],
  },
  image_url: {
    /* Url to note image */
    required: [true, "Please provide an image url for this note."],
    type: String,
  },
  likes: {
    /* How many likes your note has got*/
    type: Number,
  },
  dislikes: {
    /* How many dislikes your note has got*/

    type: Number,
  },
});

export default mongoose.models.Note || mongoose.model<Notes>("Note", NoteSchema);