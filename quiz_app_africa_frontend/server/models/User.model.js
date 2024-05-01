import mongoose from "mongoose";

// Define possible user roles
const userRoles = [
  "test engineer",
  "test lead",
  "development lead",
  "developer",
  "project manager",
  "user", // Default role
  "teacher",
  "student",
  "admin",
  "hod",
  "cleark",
  "admission officer",
  "accountant",
];

// Define user schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: userRoles, default: "user" }, // Use enum for role validation
    address: { type: String },
    phoneNumber: { type: String },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

// Define the user model
const User = mongoose.model("User", userSchema);

// Define student schema
const studentSchema = new mongoose.Schema(
  {
    student_id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    enrollment_date: { type: Date, required: true },
    class: { type: String, required: true },
    major: { type: String, required: true },
    gpa: { type: Number, required: true },
    graduation_year: { type: Number, required: true },
    advisor: { type: String, required: true },
    student_status: { type: String, required: true },
    tuition_paid: { type: String, required: true },
    class_schedule: { type: String },
  },
  {
    timestamps: true,
  }
);

// Define the student model
const Student = mongoose.model("Student", studentSchema);

export { User, Student };
