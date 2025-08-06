// This controller handles document-related logic like uploads and status changes.
const Property = require('../models/property.model');

// In-memory array to store properties, acting as a temporary database.
const properties = [
  // Pre-populate with a dummy property for the simulation using the new pricing structure
  new Property('Sample Villa', '123 Main St, Anytown', '123', [
    { duration: 'monthly', price: 250000, currency: 'USD' },
    { duration: 'yearly', price: 2800000, currency: 'USD' },
  ])
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

  // --- Future Enhancement: Dynamic Lease Generation ---
  // If docType === 'lease', the request would also include the selected pricing tier.
  // const { selectedPricing } = req.body;
  // 1. Find the chosen pricing option from property.pricing.
  // 2. Load a lease template (e.g., from a 'templates' folder).
  // 3. Auto-fill the template with property details, tenant info, and the dynamic
  //    price, duration, and dates from the selected pricing option.
  // 4. Initiate the e-signature flow with the generated document.
  // ----------------------------------------------------

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
