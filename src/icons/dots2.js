import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dots2 = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.60511 13.4C9.24511 13.4 8.86511 13.24 8.60511 12.98C8.34511 12.72 8.20511 12.36 8.20511 12C8.20511 11.64 8.36511 11.28 8.60511 11C8.86511 10.74 9.22511 10.6 9.60511 10.6C9.96511 10.6 10.3251 10.76 10.5851 11C10.8451 11.26 11.0051 11.62 11.0051 12C11.0051 12.36 10.8451 12.72 10.5851 12.98C10.3451 13.26 9.96511 13.4 9.60511 13.4ZM15.4051 12.98C15.6651 12.72 15.8251 12.36 15.8251 12C15.8251 11.64 15.6651 11.28 15.4051 11C15.1451 10.74 14.7851 10.6 14.4251 10.6C14.0651 10.6 13.6851 10.76 13.4251 11C13.1651 11.26 13.0251 11.62 13.0251 12C13.0251 12.36 13.1851 12.72 13.4251 12.98C13.6851 13.24 14.0451 13.4 14.4251 13.4C14.7651 13.4 15.1451 13.26 15.4051 12.98Z" />
  </svg>
));

Dots2.displayName = 'Dots2';

Dots2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dots2;
