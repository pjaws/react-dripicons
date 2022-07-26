import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowThinRight = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.3651 12.56L14.3851 17.56C14.2251 17.72 14.0251 17.8 13.8251 17.8C13.6251 17.8 13.4251 17.72 13.2651 17.56C12.9451 17.24 12.9451 16.74 13.2651 16.42L16.8851 12.78H5.20509C4.76509 12.78 4.40509 12.42 4.40509 11.98C4.40509 11.54 4.76509 11.18 5.20509 11.18H16.8851L13.2651 7.54001C12.9451 7.22001 12.9451 6.72 13.2651 6.4C13.5851 6.08 14.0851 6.08 14.4051 6.4L19.3851 11.4C19.6851 11.74 19.6851 12.26 19.3651 12.56Z" />
  </svg>
));

ArrowThinRight.displayName = 'ArrowThinRight';

ArrowThinRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowThinRight.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowThinRight;
