import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm hover-lift';
  
  const variants = {
    primary: 'bg-therapy-sage-600 text-white hover:bg-therapy-sage-700 shadow-warm',
    secondary: 'bg-therapy-ocean-100 text-therapy-ocean-800 hover:bg-therapy-ocean-200',
    outline: 'border border-therapy-sand-300 text-therapy-sand-800 hover:bg-therapy-sand-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}