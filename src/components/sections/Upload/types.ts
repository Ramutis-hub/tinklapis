export interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export interface FilePreviewProps {
  file: File;
  onRemove: () => void;
}