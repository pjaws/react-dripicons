import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cross = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.945 15.66C17.305 16.02 17.305 16.58 16.945 16.94C16.765 17.12 16.545 17.2 16.305 17.2C16.065 17.2 15.845 17.12 15.665 16.94L12.005 13.28L8.345 16.94C8.165 17.12 7.94501 17.2 7.70501 17.2C7.46501 17.2 7.24502 17.12 7.06502 16.94C6.70502 16.58 6.70502 16.02 7.06502 15.66L10.725 12L7.06502 8.33998C6.70502 7.97998 6.70502 7.41998 7.06502 7.05998C7.42502 6.69998 7.985 6.69998 8.345 7.05998L12.005 10.72L15.665 7.05998C16.025 6.69998 16.585 6.69998 16.945 7.05998C17.305 7.41998 17.305 7.97998 16.945 8.33998L13.285 12L16.945 15.66Z" />
  </svg>
));

Cross.displayName = 'Cross';

Cross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cross;
