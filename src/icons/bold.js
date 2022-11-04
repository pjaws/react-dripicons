import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.825 11.64C15.565 10.92 16.025 9.9 16.025 8.8C16.025 6.6 14.225 4.8 12.025 4.8H7.80497C7.36497 4.8 7.00497 5.16 7.00497 5.6V12V18.4C7.00497 18.84 7.36497 19.2 7.80497 19.2H13.005C15.205 19.2 17.005 17.4 17.005 15.2C17.005 13.66 16.125 12.32 14.825 11.64ZM8.60497 6.4H12.025C13.345 6.4 14.425 7.48 14.425 8.8C14.425 10.12 13.345 11.2 12.025 11.2H8.60497V6.4ZM13.005 17.6H8.60497V12.8H12.025H13.005C14.325 12.8 15.405 13.88 15.405 15.2C15.405 16.52 14.325 17.6 13.005 17.6Z" />
  </svg>
));

Bold.displayName = 'Bold';

Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bold;
