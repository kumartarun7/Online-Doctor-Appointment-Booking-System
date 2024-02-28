import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    imageurl: { type: String },
    bookingPrice: { type: Number },
    userType: {
      type: String,
    },
    location:{
       type:String,
    },
  
    // Fields for doctors only
    specialization: { type: String },
    qualifications: {
      type: Array,
    },
  
    experiences: {
      type: Array,
    },
  
    bio: { type: String, maxLength: 50 },
    about: { type: String },
    timeSlots: { type: Array },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    
    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    appointments: {type:Array},
    bookings:{type:Array}
  });


  const Doctors  = mongoose.models.Doctors|| mongoose.model('Doctors',DoctorSchema);


  export default Doctors;