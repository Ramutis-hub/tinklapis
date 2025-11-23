import { useState } from 'react';

export function useFileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      // Here you would typically upload the file to your server
      // For demonstration, we'll just show a success message
      alert('Failas sėkmingai įkeltas!');
      setSelectedFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Įvyko klaida įkeliant failą');
    }
  };

  return {
    selectedFile,
    handleFileSelect,
    handleRemoveFile,
    handleUpload
  };
}