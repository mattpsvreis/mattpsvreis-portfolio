import { forwardRef } from 'react';

import { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      rounded,
      variant,
      color,
      size,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const sx = `${
      rounded === 'full' ? 'rounded-full' : 'rounded-lg'
    } flex items-center justify-center
    disabled:cursor-not-allowed disabled:opacity-50 px-3 gap-1
    ${
      variant === 'outlined' && color === 'error'
        ? 'border border-red-700 text-red-700'
        : variant === 'outlined' && color === 'success'
          ? 'border border-green-700 text-green-700'
          : variant === 'outlined' && color === 'warning'
            ? 'border border-yellow-700  text-yellow-700'
            : variant === 'outlined' && color === 'secondary'
              ? 'border border-brand-border text-brand-text'
              : variant === 'outlined'
                ? 'border border-brand-primary/30 text-brand-primary'
                : 'text-white'
    }
    
    ${
      variant !== 'outlined' && color === 'error'
        ? 'bg-red-700'
        : variant !== 'outlined' && color === 'success'
          ? 'bg-green-700'
          : variant !== 'outlined' && color === 'warning'
            ? 'bg-yellow-700'
            : variant !== 'outlined' && color === 'secondary'
              ? 'bg-brand-secondary0'
              : variant !== 'outlined'
                ? 'bg-brand-primary'
                : 'bg-transparent'
    } 
            ${
              size === 'small'
                ? 'h-8 min-w-[120px] w-auto text-xs'
                : size === 'large'
                  ? 'h-14 min-w-[120px] text-lg'
                  : ' h-10 min-w-[120px] text-sm'
            } `;

    return (
      <button className={sx && className} ref={ref} {...props}>
        {startIcon && startIcon} {children} {endIcon && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
