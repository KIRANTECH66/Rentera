// A conceptual Property model to demonstrate multi-currency support.
// In a real application, this would be linked to a User (Landlord).

class Property {
  /**
   * @param {string} name - The name of the property.
   * @param {string} address - The full address of the property.
   * @param {string} ownerId - The ID of the user who owns this property.
   * @param {Array<object>} pricing - An array of pricing options.
   */
  constructor(name, address, ownerId, pricing = []) {
    this.id = `prop_${Date.now()}`;
    this.name = name;
    this.address = address;
    this.ownerId = ownerId;
    this.pricing = pricing; // e.g., [{ duration: 'monthly', price: 250000, currency: 'USD' }]
    this.createdAt = new Date();
    this.documents = []; // Array to store document records
  }
}

module.exports = Property;
