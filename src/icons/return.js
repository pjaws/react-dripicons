import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Return = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.2051 9.26V17.2C19.2051 17.64 18.8451 18 18.4051 18H6.62511C6.18511 18 5.82511 17.64 5.82511 17.2C5.82511 16.76 6.18511 16.4 6.62511 16.4H17.6051V10H7.54512L8.64512 11.12C8.96512 11.44 8.96512 11.96 8.64512 12.28C8.48512 12.44 8.28512 12.52 8.08512 12.52C7.88512 12.52 7.68511 12.44 7.52511 12.28L5.04512 9.82C4.88512 9.66 4.80511 9.46 4.80511 9.26C4.80511 9.04 4.88512 8.84 5.04512 8.7L7.52511 6.24C7.84511 5.92 8.34511 5.92 8.66511 6.24C8.98511 6.56 8.96511 7.04 8.66511 7.36L7.56511 8.42H18.4051C18.8451 8.4 19.2051 8.82 19.2051 9.26Z" />
  </svg>
));

Return.displayName = 'Return';

Return.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Return;
