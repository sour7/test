const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    
    ratings: { type: Number, required: true },
    release_date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
