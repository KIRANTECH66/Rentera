import React from 'react';

// A simple component to list the landlord's properties.
const PropertyList = ({ properties }) => {
  return (
    <div>
      <h4>My Properties</h4>
      {properties.length === 0 ? (
        <p>You have not added any properties yet.</p>
      ) : (
        <ul>
          {properties.map(prop => (
            <li key={prop.id}>{prop.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertyList;
