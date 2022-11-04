import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lock = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.4051 9.4H16.8051V8.02002C16.8051 5.06002 14.8051 3 12.0051 3C9.20511 3 7.20511 5.06002 7.20511 8.02002V9.4H6.60511C6.16511 9.4 5.80511 9.76 5.80511 10.2V20.2C5.80511 20.64 6.16511 21 6.60511 21H17.4051C17.8451 21 18.2051 20.64 18.2051 20.2V10.2C18.2051 9.76 17.8451 9.4 17.4051 9.4ZM8.80511 8.02002C8.80511 5.98002 10.1251 4.6 12.0051 4.6C13.8851 4.6 15.2051 5.98002 15.2051 8.02002V9.4H8.80511V8.02002ZM16.6051 19.4H7.40511V11H16.6051V19.4Z" />
  </svg>
));

Lock.displayName = 'Lock';

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Lock;
