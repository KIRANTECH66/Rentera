// A conceptual User model without a database connection.
// In a real application, this would be a Mongoose, Sequelize, or similar model.

class User {
  constructor(email, password, role) {
    this.id = Date.now().toString(); // Simple unique ID for now
    this.email = email;
    this.password = password; // In a real app, this would be hashed
    this.role = role; // 'landlord' or 'renter'
    this.createdAt = new Date();

    // Fields for landlord verification
    this.isIdentityVerified = false;
    this.backgroundCheckStatus = 'not_started'; // e.g., not_started, pending, clear, review_required
  }
}

module.exports = User;
