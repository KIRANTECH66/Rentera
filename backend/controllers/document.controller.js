// This controller handles document-related logic like uploads and status changes.
const Property = require('../models/property.model');

// In-memory array to store properties, acting as a temporary database.
const properties = [
  // Pre-populate with a dummy property for the simulation
  new Property('Sample Villa', '123 Main St, Anytown', 250000, 'USD', '123')
];

const uploadDocument = (req, res) => {
  // In a real app, this would use multer or a similar library to handle file streams.
  // We are only simulating the creation of the document record.
  const { propertyId, fileName, docType } = req.body;

  if (!propertyId || !fileName || !docType) {
    return res.status(400).json({ message: 'Property ID, file name, and document type are required.' });
  }

  const property = properties.find(p => p.id === propertyId);
  if (!property) {
    return res.status(404).json({ message: 'Property not found.' });
  }

  const newDocument = {
    docId: `doc_${Date.now()}`,
    fileName,
    docType, // 'lease', 'addendum', etc.
    status: 'draft', // Initial status
    createdAt: new Date(),
    // In a real app, you'd store the file path or URL from a service like S3 here.
    // fileUrl: 'https://s3.amazonaws.com/bucket/path/to/file.pdf'
  };

  property.documents.push(newDocument);
  console.log(`[Documents] Document '${fileName}' added to property ${propertyId}.`);

  res.status(201).json({
    message: 'Document record created successfully.',
    document: newDocument,
    property,
  });
};

module.exports = {
  uploadDocument,
  properties, // Exporting for simulation purposes
};
