import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Expand2 = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.8051 3.99999V8.19999C20.8051 8.63999 20.4451 8.99999 20.0051 8.99999C19.5651 8.99999 19.2051 8.63999 19.2051 8.19999V5.91999L14.1451 10.98C13.9851 11.14 13.7851 11.22 13.5851 11.22C13.3851 11.22 13.1851 11.14 13.0251 10.98C12.7051 10.66 12.7051 10.16 13.0251 9.84L18.0851 4.78H15.8051C15.3651 4.78 15.0051 4.42 15.0051 3.98C15.0051 3.54 15.3651 3.18 15.8051 3.18H20.0051C20.2251 3.18 20.4251 3.25999 20.5651 3.41999C20.7251 3.57999 20.8051 3.77999 20.8051 3.99999ZM9.78511 13.1L4.80511 18.08V15.8C4.80511 15.36 4.44511 15 4.00511 15C3.56511 15 3.20511 15.36 3.20511 15.8V20C3.20511 20.22 3.2851 20.42 3.4451 20.56C3.6051 20.72 3.80511 20.8 4.00511 20.8H8.20511C8.64511 20.8 9.00511 20.44 9.00511 20C9.00511 19.56 8.64511 19.2 8.20511 19.2H5.9251L10.9051 14.22C11.2251 13.9 11.2251 13.4 10.9051 13.08C10.6051 12.78 10.0851 12.78 9.78511 13.1Z" />
  </svg>
));

Expand2.displayName = 'Expand2';

Expand2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Expand2.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Expand2;