import mongoose from "mongoose";

const queryDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
    pages: {
      type: [String], // array of strings
      required: false,
    },
    block: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // ✅ Adds createdAt and updatedAt automatically
  }
);

// export default mongoose.model("QueryData", queryDataSchema);
export default mongoose.models.QueryData || mongoose.model("QueryData", queryDataSchema);