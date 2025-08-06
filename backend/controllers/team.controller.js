// This controller handles logic for team management, like adding property managers.
const { users } = require('./user.controller'); // Using the shared in-memory user store

const addManager = (req, res) => {
  const { landlordId, managerEmail } = req.body;

  if (!landlordId || !managerEmail) {
    return res.status(400).json({ message: 'Landlord ID and manager email are required.' });
  }

  // 1. Find the landlord and the potential manager
  const landlord = users.find(u => u.id === landlordId);
  const manager = users.find(u => u.email === managerEmail);

  if (!landlord) {
    return res.status(404).json({ message: 'Landlord account not found.' });
  }
  if (!manager) {
    // In a real app, you might send an email invite to the person to sign up.
    // For this simulation, we assume the manager must have an existing account.
    return res.status(404).json({ message: 'User with that email does not exist. Please ask them to sign up first.' });
  }

  // 2. Validation
  if (landlord.role !== 'landlord') {
    return res.status(403).json({ message: 'Only landlords can add managers.' });
  }
  if (manager.managedBy) {
    return res.status(409).json({ message: 'This user is already a manager for another landlord.' });
  }
  if (landlord.propertyManagers.includes(manager.id)) {
    return res.status(409).json({ message: 'This user is already your property manager.' });
  }

  // 3. Associate the accounts
  landlord.propertyManagers.push(manager.id);
  manager.managedBy = landlord.id;
  // You could also change the manager's role if they were previously just a 'renter'.
  // manager.role = 'manager';

  console.log(`[Team] Manager ${manager.email} added to landlord ${landlord.email}.`);

  res.status(200).json({
    message: `Successfully added ${manager.email} as a property manager.`,
    landlord,
  });
};

module.exports = {
  addManager,
};
