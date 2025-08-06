// This controller would handle all logic related to third-party verifications.
// NOTE: This is a simulation. It does not make real API calls.

// We need access to the in-memory user store from the user controller.
// This is not ideal and in a real app would be handled by a shared database service.
const { users } = require('./user.controller'); // This is a simplification for the demo

const initiateLandlordCheck = async (req, res) => {
  // In a real app, userId would come from an authenticated session (e.g., JWT).
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  if (user.role !== 'landlord') {
    return res.status(403).json({ message: 'Only landlords can initiate a background check.' });
  }

  if (user.backgroundCheckStatus === 'pending' || user.backgroundCheckStatus === 'clear') {
    return res.status(409).json({ message: `A check is already in progress or completed. Status: ${user.backgroundCheckStatus}` });
  }

  try {
    // --- SIMULATED THIRD-PARTY API CALL ---
    console.log(`[Verification] Simulating background check initiation for user ${userId} with a third-party provider...`);
    // const checkrResponse = await checkr.createCheck({ userDetails: ... });
    // --- END SIMULATION ---

    // Update user status
    user.backgroundCheckStatus = 'pending';
    console.log(`[Verification] User ${userId} status updated to 'pending'.`);

    res.status(200).json({
      message: 'Background check initiated successfully. You will be notified upon completion.',
      status: user.backgroundCheckStatus,
    });
  } catch (error) {
    console.error('[Verification] Error initiating check:', error);
    res.status(500).json({ message: 'Failed to initiate background check.' });
  }
};

module.exports = {
  initiateLandlordCheck,
};
