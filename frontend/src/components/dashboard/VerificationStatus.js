import React from 'react';

// A simple component to display the user's verification status.
const VerificationStatus = ({ status }) => {
  let statusInfo = {
    text: 'Unknown',
    color: 'grey',
  };

  switch (status) {
    case 'not_started':
      statusInfo = { text: 'Not Verified', color: 'orange' };
      break;
    case 'pending':
      statusInfo = { text: 'Verification Pending', color: 'blue' };
      break;
    case 'clear':
      statusInfo = { text: 'Verified', color: 'green' };
      break;
    case 'review_required':
      statusInfo = { text: 'Action Required', color: 'red' };
      break;
    default:
      break;
  }

  return (
    <div>
      <h4>Verification Status</h4>
      <p style={{ color: statusInfo.color, fontWeight: 'bold' }}>
        {statusInfo.text}
      </p>
    </div>
  );
};

export default VerificationStatus;
