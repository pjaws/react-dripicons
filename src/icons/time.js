import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Time = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.005 2.8C6.92499 2.8 2.80499 6.92 2.80499 12C2.80499 17.08 6.92499 21.2 12.005 21.2C17.085 21.2 21.205 17.08 21.205 12C21.205 6.92 17.085 2.8 12.005 2.8ZM12.005 19.6C7.80499 19.6 4.40499 16.2 4.40499 12C4.40499 7.8 7.80499 4.4 12.005 4.4C16.205 4.4 19.605 7.8 19.605 12C19.605 16.2 16.205 19.6 12.005 19.6ZM15.065 13.92C15.385 14.24 15.385 14.74 15.065 15.06C14.905 15.22 14.705 15.3 14.505 15.3C14.305 15.3 14.105 15.22 13.945 15.06L11.465 12.58C11.305 12.42 11.225 12.22 11.225 12.02V7.26001C11.225 6.82001 11.585 6.46001 12.025 6.46001C12.465 6.46001 12.825 6.82001 12.825 7.26001V11.7L15.065 13.92Z" />
  </svg>
));

Time.displayName = 'Time';

Time.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Time;
