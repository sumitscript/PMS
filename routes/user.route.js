const express = require("express");
const router = express.Router();
const { getUser, getUsers, createUser, deleteuser, updateduser, loginUser } = require("../controllers/user.controller.js");

// Get all users
router.get('/', getUsers);

// Get one user by ID
router.get("/:id", getUser);

// Create a new user (Signup)
router.post("/", createUser);

// Update a user by ID
router.put("/:id", updateduser);

// Delete a user by ID
router.delete("/:id", deleteuser);

// Login user (authentication)
router.post("/login", loginUser);

module.exports = router;
