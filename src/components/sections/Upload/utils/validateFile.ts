export function validateFile(file: File, accept: string, maxSize: number): boolean {
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