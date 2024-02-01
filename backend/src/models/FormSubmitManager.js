const AbstractManager = require("./AbstractManager");

class FormSubmitManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "contact_form" });
  }

  // The C of CRUD - Create operation

  async create(formSubmit) {
    try {
      // Start a transaction
      await this.database.query("START TRANSACTION");
      // Insert data into the "users" table
      const [userResult] = await this.database.query(
        `INSERT INTO users (name, mail, phone) VALUES (?, ?, ?)`,
        [formSubmit.name, formSubmit.mail, formSubmit.phone]
      );

      // Retrieve the last inserted user ID
      const userId = userResult.insertId;

      // Insert data into the "contact_form" table
      await this.database.query(
        `INSERT INTO contact_form (user_id, subject, message) VALUES (?, ?, ?)`,
        [userId, formSubmit.subject, formSubmit.message]
      );

      // Commit the transaction
      await this.database.query("COMMIT");

      return { success: true, message: "Form submitted successfully" };
    } catch (error) {
      // Rollback the transaction if an error occurs
      await this.database.query("ROLLBACK");
      console.error("Error submitting form:", error);
      return { success: false, message: "Failed to submit form" };
    }
  }
}

module.exports = FormSubmitManager;
