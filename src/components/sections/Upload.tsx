import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { FileUpload } from '../ui/FileUpload';
import { FilePreview } from '../ui/FilePreview';
import { Button } from '../ui/Button';

export function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    // Here you would typically upload the file to your server
    // For demonstration, we'll just show a success message
    alert('Failas sėkmingai įkeltas!');
    setSelectedFile(null);
  };

  return (
    <Section background="light" className="bg-therapy-sand-50/80">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title text-center">Dokumentų įkėlimas</h2>
        
        <div className="space-y-6">
          {!selectedFile ? (
            <FileUpload 
              onFileSelect={handleFileSelect}
              accept="image/*,application/pdf"
              maxSize={5}
            />
          ) : (
            <div className="space-y-4">
              <FilePreview 
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
      </div>
    </Section>
  );
}