import React, { useState } from 'react';
import { FileUploader } from './FileUploader';
import { FilePreviewCard } from './FilePreviewCard';
import { Button } from '../../ui/Button';
import { useFileUpload } from './hooks/useFileUpload';

export function UploadContainer() {
  const { selectedFile, handleFileSelect, handleRemoveFile, handleUpload } = useFileUpload();

  return (
    <div className="space-y-6">
      {!selectedFile ? (
        <FileUploader onFileSelect={handleFileSelect} />
      ) : (
        <div className="space-y-4">
          <FilePreviewCard 
            file={selectedFile}
            onRemove={handleRemoveFile}
          />
          <div className="flex justify-end">
            <Button onClick={handleUpload}>
              Įkelti
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}