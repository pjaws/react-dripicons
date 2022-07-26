import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Italic = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.145 8.71999C13.305 8.89999 13.365 9.17999 13.305 9.41999L11.825 17C12.185 16.88 12.605 17.0199 12.785 17.3599C13.005 17.7399 12.865 18.24 12.485 18.44L11.985 18.72C11.785 18.82 11.585 18.8799 11.365 18.8799C11.105 18.8799 10.845 18.8 10.625 18.62C10.225 18.32 10.025 17.82 10.125 17.32L11.545 9.97995H11.205C10.765 9.97995 10.405 9.61995 10.405 9.17995C10.405 8.73995 10.765 8.37995 11.205 8.37995H12.525C12.765 8.39995 12.985 8.53999 13.145 8.71999ZM12.785 5.27995C12.265 5.27995 11.845 5.69999 11.845 6.21999C11.845 6.73999 12.265 7.15993 12.785 7.15993C13.305 7.15993 13.725 6.73999 13.725 6.21999C13.725 5.69999 13.305 5.27995 12.785 5.27995Z" />
  </svg>
));

Italic.displayName = 'Italic';

Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Italic.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Italic;
