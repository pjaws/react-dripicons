import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Code = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.6051 17.8C14.3851 17.8 14.1851 17.72 14.0251 17.56C13.7251 17.24 13.7251 16.74 14.0451 16.42L18.6451 12L14.0451 7.58001C13.7251 7.28001 13.7251 6.76001 14.0251 6.44001C14.3251 6.12001 14.8451 6.12 15.1651 6.42L20.3651 11.42C20.5251 11.58 20.6051 11.78 20.6051 12C20.6051 12.22 20.5251 12.42 20.3651 12.58L15.1651 17.58C15.0051 17.72 14.8051 17.8 14.6051 17.8ZM9.98509 17.56C10.2851 17.24 10.2851 16.74 9.96509 16.42L5.36509 12L9.96509 7.58001C10.2851 7.28001 10.2851 6.76001 9.98509 6.44001C9.68509 6.12001 9.16509 6.12 8.84509 6.42L3.64509 11.42C3.48509 11.58 3.40509 11.78 3.40509 12C3.40509 12.22 3.48509 12.42 3.64509 12.58L8.84509 17.58C9.00509 17.72 9.20509 17.8 9.40509 17.8C9.62509 17.8 9.82509 17.72 9.98509 17.56Z" />
  </svg>
));

Code.displayName = 'Code';

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Code;
