import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: Object,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: Object,
      ref: "User",
      required: true,
    },
    bookingPrice: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);