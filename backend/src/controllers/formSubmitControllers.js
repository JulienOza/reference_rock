// Import access to database tables
const tables = require("../tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the formSubmit data from the request body
  const formSubmit = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.contact_form.create(formSubmit);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  // edit,
  add,
  // destroy,
};
