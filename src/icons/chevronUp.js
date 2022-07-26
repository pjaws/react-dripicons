import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronUp = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.005 15.4C16.785 15.4 16.585 15.32 16.425 15.16L12.005 10.56L7.58502 15.16C7.28502 15.48 6.765 15.48 6.445 15.18C6.125 14.88 6.12501 14.36 6.42501 14.04L11.425 8.84001C11.585 8.68001 11.785 8.60001 12.005 8.60001C12.225 8.60001 12.425 8.68001 12.585 8.84001L17.585 14.04C17.885 14.36 17.885 14.86 17.565 15.18C17.405 15.32 17.205 15.4 17.005 15.4Z" />
  </svg>
));

ChevronUp.displayName = 'ChevronUp';

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronUp.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ChevronUp;
