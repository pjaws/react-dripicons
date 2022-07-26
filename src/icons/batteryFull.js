import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryFull = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.8051 13.6C12.8051 14.04 12.4451 14.4 12.0051 14.4H10.6051C10.1651 14.4 9.80511 14.04 9.80511 13.6V10.4C9.80511 9.96 10.1651 9.6 10.6051 9.6H12.0051C12.4451 9.6 12.8051 9.96 12.8051 10.4V13.6ZM14.8051 14.4H16.2051C16.6451 14.4 17.0051 14.04 17.0051 13.6V11.56C17.0051 11.36 16.9651 11.18 16.8251 11.04L15.7651 9.83999C15.6051 9.65999 15.4051 9.6 15.1651 9.6H14.7851C14.3451 9.6 13.9851 9.90001 13.9851 10.36V13.6C14.0051 14.04 14.3651 14.4 14.8051 14.4ZM8.60511 10.4C8.60511 9.96 8.24511 9.6 7.80511 9.6H6.40511C5.96511 9.6 5.60511 9.96 5.60511 10.4V13.6C5.60511 14.04 5.96511 14.4 6.40511 14.4H7.80511C8.24511 14.4 8.60511 14.04 8.60511 13.6V10.4ZM21.2051 10.52V13.48C21.2051 13.92 20.8451 14.2 20.4051 14.2H19.8051V16.4C19.8051 16.84 19.4651 17.2 19.0051 17.2H3.60511C3.16511 17.2 2.80511 16.84 2.80511 16.4V7.6C2.80511 7.16 3.16511 6.8 3.60511 6.8H19.0051C19.4451 6.8 19.8051 7.16 19.8051 7.6V9.8H20.4051C20.8451 9.8 21.2051 10.08 21.2051 10.52ZM18.2051 8.4H4.40511V15.6H18.2051V13.48V10.52V8.4Z" />
  </svg>
));

BatteryFull.displayName = 'BatteryFull';

BatteryFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryFull.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default BatteryFull;
