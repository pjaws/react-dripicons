import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clockwise = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.1851 11.16L17.4251 13.96C17.2651 14.12 17.0651 14.2 16.8451 14.2C16.6251 14.2 16.4251 14.12 16.2651 13.96L13.5051 11.16C13.2051 10.84 13.2051 10.34 13.5051 10.02C13.8251 9.72003 14.3251 9.72003 14.6451 10.02L16.1851 11.58C15.9851 8.68003 13.6051 6.38003 10.7051 6.38003C7.6651 6.38003 5.2051 8.90003 5.2051 11.98C5.2051 15.06 7.6651 17.58 10.7051 17.58C11.8251 17.58 12.9051 17.24 13.8051 16.6C14.1651 16.34 14.6651 16.44 14.9251 16.8C15.1851 17.16 15.0851 17.66 14.7251 17.92C13.5451 18.74 12.1451 19.18 10.7051 19.18C6.7851 19.18 3.6051 15.96 3.6051 11.98C3.6051 8.00003 6.7851 4.78003 10.7051 4.78003C14.3851 4.78003 17.4251 7.64003 17.7651 11.3L19.0251 10.02C19.3451 9.70003 19.8451 9.70003 20.1651 10.02C20.4851 10.34 20.4851 10.84 20.1851 11.16Z" />
  </svg>
));

Clockwise.displayName = 'Clockwise';

Clockwise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Clockwise;
