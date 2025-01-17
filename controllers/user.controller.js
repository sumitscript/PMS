const User = require("../models/User");
const express = require("express");
const router = express.Router();

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get one user by ID
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user (Signup)
const createUser = async (req, res) => {
    try {
        const { Email } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Create new user if no existing user
        const newuser = await User.create(req.body);
        res.status(201).json(newuser); // Return created user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a user by ID
const updateduser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser); // Return updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a user by ID
const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login user (authentication)
const loginUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Find the user by email
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare passwords (plain text comparison)
        const isMatch = Password === user.Password;
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUser,
    getUsers,
    createUser,
    deleteuser,
    updateduser,
    loginUser

};
