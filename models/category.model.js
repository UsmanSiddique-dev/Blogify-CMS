import mongoose from "mongoose";
import slugify from "slugify";
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

categorySchema.pre("validate", function () {
  this.slug = slugify(this.title, { lower: true });
  
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
