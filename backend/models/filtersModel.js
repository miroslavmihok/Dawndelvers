import mongoose from "mongoose";

const filtersSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  values: [
    {
      title: {
        type: String,
      },
      multiplicator: {
        type: Number,
        required: true,
      },
      min: { type: Number },
      max: { type: Number },
      step: { type: Number },
    },
  ],
});

const Filters = mongoose.model("Filters", filtersSchema);

export default Filters;
