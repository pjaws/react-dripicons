import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Box = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.745 7.60002H6.24498C5.80498 7.60002 5.44498 7.96002 5.44498 8.40002L5.32499 18.6C5.32499 18.82 5.405 19.02 5.565 19.18C5.725 19.34 5.92499 19.42 6.12499 19.42H17.805C18.025 19.42 18.225 19.34 18.365 19.18C18.505 19.02 18.605 18.82 18.605 18.62L18.525 8.42004C18.545 7.96004 18.185 7.60002 17.745 7.60002ZM12.005 17.8H6.94498L7.04498 9.20002H16.945L17.005 17.8H12.005ZM14.565 11.4C14.565 11.84 14.205 12.2 13.765 12.2H10.265C9.825 12.2 9.465 11.84 9.465 11.4C9.465 10.96 9.825 10.6 10.265 10.6H13.765C14.205 10.6 14.565 10.96 14.565 11.4ZM20.565 8.18C20.505 8.18 20.465 8.20002 20.405 8.20002C20.025 8.20002 19.685 7.94003 19.625 7.56003L19.365 6.20002H4.665L4.40499 7.56003C4.32499 8.00003 3.905 8.28002 3.465 8.20002C3.025 8.12002 2.74499 7.70003 2.82499 7.26003L3.20499 5.26003C3.28499 4.88003 3.605 4.62004 3.985 4.62004H20.005C20.385 4.62004 20.725 4.90003 20.785 5.26003L21.165 7.26003C21.265 7.68003 20.985 8.1 20.565 8.18Z" />
  </svg>
));

Box.displayName = 'Box';

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Box.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Box;
