import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowThinDown = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.5651 14.38L12.5651 19.36C12.4051 19.52 12.2051 19.6 12.0051 19.6C11.8051 19.6 11.6051 19.52 11.4451 19.36L6.4451 14.38C6.1251 14.06 6.1251 13.56 6.4451 13.24C6.7651 12.92 7.26511 12.92 7.58511 13.24L11.2251 16.86V5.19999C11.2251 4.75999 11.5851 4.39999 12.0251 4.39999C12.4651 4.39999 12.8251 4.75999 12.8251 5.19999V16.88L16.4651 13.26C16.7851 12.94 17.2851 12.94 17.6051 13.26C17.8851 13.56 17.8851 14.06 17.5651 14.38Z" />
  </svg>
));

ArrowThinDown.displayName = 'ArrowThinDown';

ArrowThinDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowThinDown.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowThinDown;
