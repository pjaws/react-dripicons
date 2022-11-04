import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ZoomOut = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.9451 19.66L14.0051 12.8C14.8451 11.74 15.3251 10.42 15.3251 9C15.3251 5.58 12.5251 2.8 9.06511 2.8C5.62511 2.8 2.8051 5.58 2.8051 9C2.8051 12.42 5.60511 15.2 9.06511 15.2C10.4251 15.2 11.6651 14.78 12.6851 14.04L19.6851 20.94C19.8651 21.12 20.0851 21.2 20.3051 21.2C20.5451 21.2 20.7651 21.12 20.9451 20.94C21.2851 20.58 21.2851 20.02 20.9451 19.66ZM4.4051 9C4.4051 6.46 6.50511 4.4 9.06511 4.4C11.6451 4.4 13.7251 6.46 13.7251 9C13.7251 11.54 11.6251 13.6 9.06511 13.6C6.48511 13.6 4.4051 11.52 4.4051 9ZM12.1851 9.1C12.1851 9.48 11.8651 9.8 11.4851 9.8H6.62509C6.24509 9.8 5.92509 9.48 5.92509 9.1C5.92509 8.72 6.24509 8.4 6.62509 8.4H11.4851C11.8851 8.4 12.1851 8.72 12.1851 9.1Z" />
  </svg>
));

ZoomOut.displayName = 'ZoomOut';

ZoomOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ZoomOut;
