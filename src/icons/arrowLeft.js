import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.205 8.59998H11.805V5.99998C11.805 5.67998 11.565 5.37998 11.285 5.25998C10.985 5.13998 10.625 5.19998 10.405 5.41998L4.265 11.42C4.105 11.58 4.02499 11.78 4.02499 12C4.02499 12.22 4.105 12.42 4.265 12.58L10.385 18.58C10.545 18.72 10.745 18.8 10.945 18.8C11.045 18.8 11.185 18.78 11.285 18.74C11.585 18.62 11.805 18.32 11.805 18V15.4H19.205C19.645 15.4 20.005 14.94 20.005 14.5V9.49998C20.005 9.05998 19.645 8.59998 19.205 8.59998ZM18.405 13.8H10.925C10.485 13.8 10.205 14.06 10.205 14.5V16.1L6.02499 12L10.205 7.89998V9.49998C10.205 9.93998 10.485 10.2 10.925 10.2H18.405V13.8Z" />
  </svg>
));

ArrowLeft.displayName = 'ArrowLeft';

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowLeft;
