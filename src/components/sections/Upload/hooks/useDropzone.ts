import { useCallback } from 'react';
import { validateFile } from '../utils/validateFile';

interface UseDropzoneProps {
  onFileSelect: (file: File) => void;
  accept: string;
  maxSize: number;
}

export function useDropzone({ onFileSelect, accept, maxSize }: UseDropzoneProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file, accept, maxSize)) {
      onFileSelect(file);
    }
  }, [onFileSelect, accept, maxSize]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file, accept, maxSize)) {
      onFileSelect(file);
    }
  }, [onFileSelect, accept, maxSize]);

  return {
    getRootProps: () => ({
      onDrop: handleDrop,
      onDragOver: handleDragOver
    }),
    getInputProps: () => ({
      type: 'file',
      className: 'absolute inset-0 w-full h-full opacity-0 cursor-pointer',
      onChange: handleFileInput,
      accept
    })
  };
}