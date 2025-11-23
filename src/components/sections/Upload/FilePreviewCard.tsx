import React from 'react';
import { X } from 'lucide-react';
import { FilePreviewProps } from './types';
import { formatFileSize } from './utils/formatFileSize';

export function FilePreviewCard({ file, onRemove }: FilePreviewProps) {
  const isImage = file.type.startsWith('image/');
  
  return (
    <div className="relative bg-therapy-sand-50 p-4 rounded-sm">
      <div className="flex items-center gap-4">
        {isImage && (
          <div className="w-16 h-16 rounded-sm overflow-hidden bg-therapy-sand-100">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="text-therapy-sand-800 font-medium truncate">
            {file.name}
          </p>
          <p className="text-sm text-therapy-sand-600">
            {formatFileSize(file.size)}
          </p>
        </div>
        <button
          onClick={onRemove}
          className="text-therapy-sand-500 hover:text-therapy-sand-700 transition-colors"
          aria-label="Remove file"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}