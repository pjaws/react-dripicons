import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Download = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.605 14.56V20C20.605 20.56 20.165 21 19.605 21H4.40497C3.84497 21 3.40497 20.56 3.40497 20V14.56C3.40497 14 3.84497 13.56 4.40497 13.56C4.96497 13.56 5.40497 14 5.40497 14.56V19H18.605V14.56C18.605 14 19.045 13.56 19.605 13.56C20.165 13.56 20.605 14 20.605 14.56ZM11.285 15.8C11.465 16 11.725 16.1 12.005 16.1C12.285 16.1 12.525 16 12.725 15.8L16.705 11.72C17.085 11.32 17.085 10.7 16.685 10.3C16.285 9.92 15.665 9.92002 15.265 10.32L12.985 12.64V4C12.985 3.44 12.545 3 11.985 3C11.425 3 10.985 3.44 10.985 4V12.66L8.70497 10.34C8.32497 9.93999 7.68497 9.94002 7.28497 10.32C6.88497 10.7 6.88498 11.34 7.26498 11.74L11.285 15.8Z" />
  </svg>
));

Download.displayName = 'Download';

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Download;
