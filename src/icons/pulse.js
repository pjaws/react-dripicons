import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pulse = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.2051 14.2C21.2051 14.64 20.8451 15 20.4051 15H16.6451C16.3051 15 16.0051 14.82 15.8851 14.48L15.2851 12.8L13.3251 19.42C13.2251 19.76 12.9051 20 12.5651 20H12.5451C12.1851 19.98 11.8651 19.74 11.7851 19.38L9.20511 8.2L7.64512 14.42C7.56512 14.78 7.24511 15 6.86511 15H3.60511C3.16511 15 2.80511 14.64 2.80511 14.2C2.80511 13.76 3.16511 13.4 3.60511 13.4H6.24512L8.46511 4.57998C8.54511 4.21998 8.88512 4 9.24512 4C9.60512 4 9.92511 4.26002 10.0251 4.62002L12.6651 16.06L14.4651 9.97998C14.5651 9.63998 14.8651 9.4 15.2051 9.4C15.5451 9.38 15.8651 9.60002 15.9851 9.92002L17.2251 13.4H20.4251C20.8451 13.4 21.2051 13.76 21.2051 14.2Z" />
  </svg>
));

Pulse.displayName = 'Pulse';

Pulse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pulse;
