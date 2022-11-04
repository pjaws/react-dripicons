import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Link = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.965 15.58L16.205 10.82C15.885 10.5 15.385 10.5 15.065 10.82L13.505 12.38L11.625 10.5L13.185 8.93999C13.505 8.61999 13.505 8.12 13.185 7.8L8.425 3.03999C8.105 2.71999 7.60501 2.71999 7.28501 3.03999L3.025 7.3C2.865 7.46 2.78501 7.66001 2.78501 7.86001C2.78501 8.08001 2.865 8.28002 3.025 8.42002L7.78501 13.18C7.94501 13.34 8.14499 13.42 8.34499 13.42C8.54499 13.42 8.745 13.34 8.905 13.18L10.465 11.62L12.345 13.5L10.785 15.06C10.465 15.38 10.465 15.88 10.785 16.2L15.545 20.96C15.705 21.12 15.905 21.2 16.105 21.2C16.325 21.2 16.525 21.12 16.665 20.96L20.925 16.7C21.285 16.4 21.285 15.88 20.965 15.58ZM8.36501 11.48L4.74499 7.86001L7.86501 4.73999L11.485 8.36001L10.485 9.36001L9.88501 8.76001C9.56501 8.44001 9.06499 8.44001 8.74499 8.76001C8.42499 9.08001 8.42499 9.58 8.74499 9.9L9.34499 10.5L8.36501 11.48ZM16.145 19.26L12.525 15.64L13.525 14.64L14.125 15.24C14.285 15.4 14.485 15.48 14.685 15.48C14.885 15.48 15.085 15.4 15.245 15.24C15.565 14.92 15.565 14.42 15.245 14.1L14.645 13.5L15.645 12.5L19.265 16.12L16.145 19.26Z" />
  </svg>
));

Link.displayName = 'Link';

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Link;
