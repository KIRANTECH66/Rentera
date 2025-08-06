// This controller aggregates data from various sources for the landlord dashboard.
const { users } = require('./user.controller');
const { properties } = require('./document.controller');

const getLandlordDashboard = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  // 1. Find the user
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // 2. Find properties owned by this user
  const userProperties = properties.filter(p => p.ownerId === userId);

  // 3. Aggregate data
  const dashboardData = {
    user: {
      email: user.email,
      role: user.role,
      isIdentityVerified: user.isIdentityVerified,
      backgroundCheckStatus: user.backgroundCheckStatus,
    },
    properties: userProperties,
    // In a real app, you might also aggregate recent messages, applications, etc.
    stats: {
      propertyCount: userProperties.length,
      totalDocuments: userProperties.reduce((acc, prop) => acc + prop.documents.length, 0),
    }
  };

  res.status(200).json(dashboardData);
};

module.exports = {
  getLandlordDashboard,
};
