import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowThinLeft = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.6051 12C19.6051 12.44 19.2451 12.8 18.8051 12.8H7.12509L10.7451 16.44C11.0651 16.76 11.0651 17.26 10.7451 17.58C10.5851 17.74 10.3851 17.82 10.1851 17.82C9.98509 17.82 9.76509 17.74 9.62509 17.58L4.64509 12.58C4.32509 12.26 4.32509 11.76 4.64509 11.46L9.62509 6.46C9.94509 6.14 10.4451 6.14 10.7651 6.46C11.0851 6.78 11.0851 7.28 10.7651 7.6L7.12509 11.2H18.8051C19.2451 11.2 19.6051 11.56 19.6051 12Z" />
  </svg>
));

ArrowThinLeft.displayName = 'ArrowThinLeft';

ArrowThinLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowThinLeft.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowThinLeft;
