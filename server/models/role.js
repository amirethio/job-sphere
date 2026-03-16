import mongoose from "mongoose";
const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    companyLogo: { type: String, required: true },
    location: { type: String, required: true },
    jobType: {
      type: String,
      enum: [
        "Full-time",
        "Part-time",
        "Contract",
        "Internship",
        "Volunteer",
        "Remote",
        "On-Site",
      ],
      required: true,
    },
    salary: String,
    experience: {
      type: String,
      enum: ["Beginner", "Intermediate", "Expert"],
      required: true,
    },
    numberOfApplicants: { type: Number, default: 0 },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    responsibilities: [String],
    requirements: [String],
    saved: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Job", JobSchema);
