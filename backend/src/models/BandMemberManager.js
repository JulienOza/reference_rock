const AbstractManager = require("./AbstractManager");

class BandMemberManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "band_members" as configuration
    super({ table: "band_members" });
  }

  // The C of CRUD - Create operation

  async create(bandMember) {
    // Execute the SQL INSERT query to add a new bandMember to the "band_members" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [bandMember.title]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific bandMember by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all bandMembers from the "band_members" table
    // const [rows] = await this.database.query(`select * from ${this.table}`);
    const [rows] = await this.database.query("select * from band_members");

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = BandMemberManager;
