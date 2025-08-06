import React from 'react';

// A simple component to list recent documents from all properties.
const RecentDocuments = ({ properties }) => {
  // Extract all documents from all properties into a single array
  const allDocuments = properties.flatMap(prop =>
    prop.documents.map(doc => ({ ...doc, propertyName: prop.name }))
  );

  // Sort by date to get the most recent (assuming createdAt is available)
  allDocuments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const recentDocs = allDocuments.slice(0, 5); // Show top 5 recent

  return (
    <div>
      <h4>Recent Documents</h4>
      {recentDocs.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <ul>
          {recentDocs.map(doc => (
            <li key={doc.docId}>
              {doc.fileName} (<em>{doc.propertyName}</em>) - <span style={{ color: 'gray' }}>{doc.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentDocuments;
