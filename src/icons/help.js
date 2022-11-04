import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Help = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.505 5.5C16.765 3.76 14.465 2.8 12.005 2.8C9.54499 2.8 7.24499 3.76 5.50499 5.5C3.76499 7.24 2.80499 9.54 2.80499 12C2.80499 14.46 3.76499 16.76 5.50499 18.5C7.24499 20.24 9.54499 21.2 12.005 21.2C14.465 21.2 16.765 20.24 18.505 18.5C20.245 16.76 21.205 14.46 21.205 12C21.205 9.54 20.245 7.24 18.505 5.5ZM16.705 10.88L19.445 10.46C19.545 10.96 19.605 11.48 19.605 12C19.605 12.52 19.545 13.04 19.445 13.54L16.705 13.12C16.885 12.38 16.885 11.62 16.705 10.88ZM19.105 9.27998L16.265 9.72002C16.045 9.30002 15.765 8.91998 15.425 8.57998C15.085 8.23998 14.685 7.93999 14.285 7.73999L14.725 4.9C15.705 5.28 16.625 5.86002 17.385 6.62002C18.145 7.40002 18.725 8.29998 19.105 9.27998ZM12.005 15.24C11.145 15.24 10.325 14.9 9.72499 14.3C9.10499 13.68 8.785 12.88 8.785 12.02C8.785 11.16 9.12499 10.34 9.72499 9.73999C10.365 9.09999 11.185 8.8 12.005 8.8C12.825 8.8 13.665 9.11999 14.285 9.73999C14.905 10.36 15.225 11.16 15.225 12.02C15.225 12.88 14.885 13.7 14.285 14.3C13.685 14.9 12.865 15.24 12.005 15.24ZM12.005 4.4C12.525 4.4 13.045 4.46001 13.545 4.56001L13.125 7.3C12.385 7.12 11.625 7.12 10.885 7.3L10.465 4.56001C10.965 4.46001 11.485 4.4 12.005 4.4ZM6.62499 6.62002C7.38499 5.86002 8.305 5.26 9.285 4.9L9.72499 7.73999C9.30499 7.95999 8.925 8.23998 8.585 8.57998C8.245 8.91998 7.96499 9.32002 7.72499 9.72002L4.885 9.27998C5.285 8.29998 5.86499 7.40002 6.62499 6.62002ZM4.40499 12C4.40499 11.48 4.465 10.96 4.565 10.46L7.30499 10.88C7.22499 11.24 7.165 11.62 7.165 12C7.165 12.38 7.20499 12.76 7.30499 13.12L4.565 13.54C4.465 13.04 4.40499 12.52 4.40499 12ZM4.90499 14.72L7.74498 14.28C7.96498 14.7 8.24499 15.08 8.60499 15.42C8.94499 15.76 9.34498 16.04 9.74498 16.28L9.30499 19.12C8.32499 18.74 7.40498 18.16 6.64498 17.4C5.86498 16.6 5.28499 15.7 4.90499 14.72ZM12.005 19.6C11.485 19.6 10.965 19.54 10.465 19.44L10.885 16.7C11.245 16.78 11.625 16.84 12.005 16.84C12.385 16.84 12.765 16.8 13.125 16.7L13.545 19.44C13.045 19.54 12.525 19.6 12.005 19.6ZM17.385 17.38C16.625 18.14 15.705 18.74 14.725 19.1L14.285 16.26C14.705 16.04 15.085 15.76 15.425 15.4C15.765 15.06 16.065 14.66 16.265 14.26L19.105 14.7C18.725 15.7 18.145 16.6 17.385 17.38Z" />
  </svg>
));

Help.displayName = 'Help';

Help.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Help;
