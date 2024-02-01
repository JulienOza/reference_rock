const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Import itemControllers module for handling bandMembers-related operations
const bandMemberControllers = require("./controllers/bandMemberControllers");

// Route to get a list of bandMembers
router.get("/bandmembers", bandMemberControllers.browse);

// Route to get a specific bandMember by ID
router.get("/bandmembers/:id", bandMemberControllers.read);

// Route to add a new bandMember
router.post("/bandmembers", bandMemberControllers.add);

// Import itemControllers module for handling formSubmit-related operations
const formSubmitControllers = require("./controllers/formSubmitControllers");

// Route to add a new formSubmit
router.post("/formsubmits", formSubmitControllers.add);

/* ************************************************************************* */

module.exports = router;
