import React from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from './hooks/useDropzone';
import { FileUploaderProps } from './types';

export function FileUploader({ onFileSelect }: FileUploaderProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onFileSelect,
    accept: 'image/*,application/pdf',
    maxSize: 5
  });

  return (
    <div 
      {...getRootProps()}
      className="relative border-2 border-dashed border-therapy-sand-200 
        rounded-sm p-8 text-center hover:border-therapy-sand-300 
        transition-colors"
    >
      <input {...getInputProps()} />
      <div className="space-y-4">
        <Upload className="mx-auto text-therapy-sand-400" size={32} />
        <div className="text-therapy-sand-700">
          <p className="font-medium">Įkelkite failą</p>
          <p className="text-sm text-therapy-sand-600">
            arba tempkite ir paleiskite čia
          </p>
        </div>
        <p className="text-xs text-therapy-sand-500">
          Maksimalus dydis: 5MB
        </p>
      </div>
    </div>
  );
}