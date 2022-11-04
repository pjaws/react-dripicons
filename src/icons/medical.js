import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Medical = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.9651 7.37998C20.8051 7.21998 20.6051 7.2 20.4051 7.2H16.2051V4.8C16.2051 4.36 15.8051 4 15.3651 4H8.64512C8.20512 4 7.80511 4.36 7.80511 4.8V7.2H3.60511C3.16511 7.2 2.80511 7.46 2.80511 7.9V19.2C2.80511 19.64 3.16511 20 3.60511 20H20.4051C20.8451 20 21.2051 19.64 21.2051 19.2V7.93999C21.2051 7.71999 21.1251 7.53998 20.9651 7.37998ZM9.40511 5.6H14.6051V7.2H9.40511V5.6ZM19.6051 18.4H4.40511V8.8H19.6051V18.4ZM8.74512 13.5C8.74512 13.12 9.06512 12.8 9.44512 12.8H11.2051V11.02C11.2051 10.64 11.5251 10.32 11.9051 10.32C12.2851 10.32 12.6051 10.64 12.6051 11.02V12.8H14.5651C14.9451 12.8 15.2651 13.12 15.2651 13.5C15.2651 13.88 14.9451 14.2 14.5651 14.2H12.6051V16.08C12.6051 16.46 12.2851 16.78 11.9051 16.78C11.5251 16.78 11.2051 16.46 11.2051 16.08V14.2H9.44512C9.06512 14.2 8.74512 13.88 8.74512 13.5Z" />
  </svg>
));

Medical.displayName = 'Medical';

Medical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Medical;
