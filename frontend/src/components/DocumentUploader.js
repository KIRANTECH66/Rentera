import React, { useState } from 'react';
import useTranslation from '../hooks/useTranslation';
import { uploadDocument } from '../services/api';

const DocumentUploader = ({ propertyId }) => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [docType, setDocType] = useState('lease'); // Default doc type
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage(t('uploader.error.noFile'));
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await uploadDocument({
        propertyId,
        fileName: selectedFile.name,
        docType,
      });
      setStatus('success');
      setMessage(t('uploader.success', { fileName: selectedFile.name }));
      setSelectedFile(null); // Clear file input
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  };

  return (
    <div className="uploader-container">
      <h4>{t('uploader.title')}</h4>
      <div>
        <label htmlFor="docType">{t('uploader.docTypeLabel')}</label>
        <select id="docType" value={docType} onChange={(e) => setDocType(e.target.value)}>
          <option value="lease">{t('uploader.docType.lease')}</option>
          <option value="addendum">{t('uploader.docType.addendum')}</option>
          <option value="other">{t('uploader.docType.other')}</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-upload">{t('uploader.fileLabel')}</label>
        <input id="file-upload" type="file" onChange={handleFileChange} />
      </div>
      {selectedFile && <p>{t('uploader.selectedFile')}: {selectedFile.name}</p>}
      <button onClick={handleUpload} disabled={status === 'loading'}>
        {status === 'loading' ? t('uploader.button.loading') : t('uploader.button.upload')}
      </button>
      {message && (
        <p style={{ color: status === 'success' ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default DocumentUploader;
