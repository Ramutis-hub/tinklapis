import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { Button } from './Button';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
  className?: string;
}

export function FileUpload({ 
  onFileSelect, 
  accept = 'image/*',
  maxSize = 5, // 5MB default
  className = '' 
}: FileUploadProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file, accept, maxSize)) {
      onFileSelect(file);
    }
  }, [onFileSelect, accept, maxSize]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file, accept, maxSize)) {
      onFileSelect(file);
    }
  }, [onFileSelect, accept, maxSize]);

  return (
    <div 
      className={`relative border-2 border-dashed border-therapy-sand-200 
        rounded-sm p-8 text-center hover:border-therapy-sand-300 
        transition-colors ${className}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
        accept={accept}
      />
      
      <div className="space-y-4">
        <Upload className="mx-auto text-therapy-sand-400" size={32} />
        <div className="text-therapy-sand-700">
          <p className="font-medium">Įkelkite failą</p>
          <p className="text-sm text-therapy-sand-600">
            arba tempkite ir paleiskite čia
          </p>
        </div>
        <p className="text-xs text-therapy-sand-500">
          Maksimalus dydis: {maxSize}MB
        </p>
      </div>
    </div>
  );
}

function validateFile(file: File, accept: string, maxSize: number): boolean {
  const fileType = file.type;
  const fileSize = file.size / (1024 * 1024); // Convert to MB

  // Check file type
  if (!accept.includes('*')) {
    const acceptedTypes = accept.split(',');
    if (!acceptedTypes.some(type => fileType.match(type.trim()))) {
      alert('Netinkamas failo formatas');
      return false;
    }
  }

  // Check file size
  if (fileSize > maxSize) {
    alert(`Failas per didelis. Maksimalus dydis: ${maxSize}MB`);
    return false;
  }

  return true;
}