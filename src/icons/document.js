import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Document = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.8051 4.00001C18.8051 3.56001 18.4451 3.20001 18.0051 3.20001H6.00511C5.56511 3.20001 5.20511 3.56001 5.20511 4.00001V20C5.20511 20.44 5.56511 20.8 6.00511 20.8H18.0051C18.4451 20.8 18.8051 20.44 18.8051 20V4.00001ZM17.2051 19.2H6.80511V4.80001H17.2051V19.2ZM8.70511 13.9C8.70511 13.52 9.02511 13.2 9.40511 13.2H11.7651C12.1451 13.2 12.4651 13.52 12.4651 13.9C12.4651 14.28 12.1451 14.6 11.7651 14.6H9.40511C9.00511 14.6 8.70511 14.28 8.70511 13.9ZM8.80511 10.7C8.80511 10.32 9.12511 10 9.50511 10H14.2651C14.6451 10 14.9651 10.32 14.9651 10.7C14.9651 11.08 14.6451 11.4 14.2651 11.4H9.50511C9.12511 11.4 8.80511 11.08 8.80511 10.7ZM8.80511 7.70001C8.80511 7.32001 9.12511 7.00001 9.50511 7.00001H14.2651C14.6451 7.00001 14.9651 7.32001 14.9651 7.70001C14.9651 8.08001 14.6451 8.40001 14.2651 8.40001H9.50511C9.12511 8.40001 8.80511 8.08001 8.80511 7.70001ZM14.7451 13.46C14.8651 13.58 14.9451 13.76 14.9451 13.96C14.9451 14.14 14.8651 14.32 14.7451 14.46C14.6251 14.58 14.4251 14.66 14.2451 14.66C14.0651 14.66 13.8851 14.58 13.7451 14.46C13.6051 14.34 13.5451 14.16 13.5451 13.96C13.5451 13.78 13.6251 13.6 13.7451 13.46C14.0051 13.2 14.4851 13.2 14.7451 13.46Z" />
  </svg>
));

Document.displayName = 'Document';

Document.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Document;
