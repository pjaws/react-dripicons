import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.1651 16.42C15.4851 16.72 15.4851 17.24 15.1851 17.56C15.0251 17.72 14.8251 17.8 14.6051 17.8C14.4051 17.8 14.2051 17.72 14.0451 17.58L8.84509 12.58C8.68509 12.42 8.6051 12.22 8.6051 12C8.6051 11.78 8.68509 11.58 8.84509 11.42L14.0451 6.42001C14.3651 6.12001 14.8651 6.12001 15.1851 6.44001C15.4851 6.76001 15.4851 7.26001 15.1651 7.58001L10.5651 12L15.1651 16.42Z" />
  </svg>
));

ChevronLeft.displayName = 'ChevronLeft';

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ChevronLeft;
