import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowThinUp = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.565 10.76C17.405 10.92 17.205 11 17.005 11C16.805 11 16.605 10.92 16.445 10.76L12.805 7.12001V18.8C12.805 19.24 12.445 19.6 12.005 19.6C11.565 19.6 11.205 19.24 11.205 18.8V7.12001L7.56499 10.74C7.24499 11.06 6.74499 11.06 6.42499 10.74C6.10499 10.42 6.10499 9.92 6.42499 9.6L11.425 4.62001C11.745 4.30001 12.245 4.30001 12.545 4.62001L17.545 9.6C17.885 9.94 17.885 10.44 17.565 10.76Z" />
  </svg>
));

ArrowThinUp.displayName = 'ArrowThinUp';

ArrowThinUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowThinUp.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowThinUp;
