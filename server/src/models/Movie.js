const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    
    ratings: { type: String, required: true },
    release_date: { type: String, required: true, unique:true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey:false
  }
);

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
