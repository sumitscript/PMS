const { mongoose } = require('mongoose');

// Registration Schema
const UserSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Please enter the Name"]
        },

        College: {
            type: String,
            required: [true, "Please select the College"]
        },

        Division: {
            type: String,
            required: [true, "Please enter the Division"]
        },

        Semester: {
            type: String,
            required: [true, "Please select the Semester"]
        },

        Branch: {
            type: String,
            required: [true, "Please select the Branch"]
        },

        Program: {
            type: String,
            required: [true, "Please select the Program"]
        },

        Enrollment_Number: {
            type: String,
            required: [true, "Please enter the Enrollment Number"]
        },

        Git_ID: {
            type: String,
            required: [false], // Optional field
        },

        Email: {
            type: String,
            required: [true, "Please enter the Email"],
            unique: true,  // Ensures email is unique
        },

        Password: {
            type: String,
            required: [true, "Please enter the Password"]
        },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("Registration", UserSchema);

module.exports = User;
