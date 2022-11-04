import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Monitor = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.2051 5.4C21.2051 4.96 20.8451 4.6 20.4051 4.6H3.60511C3.16511 4.6 2.80511 4.96 2.80511 5.4V15.8C2.80511 16.24 3.16511 16.6 3.60511 16.6H20.4051C20.8451 16.6 21.2051 16.24 21.2051 15.8V5.4ZM19.6051 15H4.40511V6.2H19.6051V15ZM16.7051 18.6C16.7051 19.04 16.3451 19.4 15.9051 19.4H8.12512C7.68512 19.4 7.32512 19.04 7.32512 18.6C7.32512 18.16 7.68512 17.8 8.12512 17.8H15.9051C16.3451 17.8 16.7051 18.16 16.7051 18.6Z" />
  </svg>
));

Monitor.displayName = 'Monitor';

Monitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Monitor;
