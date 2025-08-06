// A conceptual Property model to demonstrate multi-currency support.
// In a real application, this would be linked to a User (Landlord).

class Property {
  /**
   * @param {string} name - The name of the property.
   * @param {string} address - The full address of the property.
   * @param {number} rentAmount - The rent amount in the smallest currency unit (e.g., cents).
   * @param {string} rentCurrency - The 3-letter ISO currency code (e.g., 'USD', 'EUR').
   * @param {string} ownerId - The ID of the user who owns this property.
   */
  constructor(name, address, rentAmount, rentCurrency, ownerId) {
    if (!Number.isInteger(rentAmount)) {
      throw new Error('Rent amount must be an integer (e.g., in cents).');
    }
    if (typeof rentCurrency !== 'string' || rentCurrency.length !== 3) {
      throw new Error('Rent currency must be a 3-letter ISO code.');
    }

    this.id = `prop_${Date.now()}`;
    this.name = name;
    this.address = address;
    this.rentAmount = rentAmount;
    this.rentCurrency = rentCurrency.toUpperCase();
    this.ownerId = ownerId;
    this.createdAt = new Date();
    this.documents = []; // Array to store document records
  }
}

module.exports = Property;
