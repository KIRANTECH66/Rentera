const User = require('../models/user.model');

// In-memory array to store users, acting as a temporary database.
const users = [];

const register = (req, res) => {
  const { email, password, role } = req.body;

  // 1. Basic Validation
  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role are required.' });
  }

  // 2. Check if user already exists (simulated)
  if (users.find(user => user.email === email)) {
    return res.status(409).json({ message: 'User with this email already exists.' });
  }

  // 3. Hash password (simulated)
  // In a real app: const hashedPassword = await bcrypt.hash(password, 10);
  const hashedPassword = `hashed_${password}`;

  // 4. Create new user
  const newUser = new User(email, hashedPassword, role);

  // 5. Save user to our temporary "database"
  users.push(newUser);
  console.log('Current users:', users);

  // 6. Respond to the client (don't send the password back)
  res.status(201).json({
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
    createdAt: newUser.createdAt,
  });
};

module.exports = {
  register,
};
