import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronDown = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.005 15.4C11.785 15.4 11.585 15.32 11.425 15.16L6.42501 9.96C6.12501 9.64 6.125 9.14 6.445 8.82C6.765 8.52 7.26502 8.52001 7.58502 8.84001L12.005 13.44L16.425 8.84001C16.725 8.52001 17.245 8.52 17.565 8.82C17.885 9.12 17.885 9.64 17.585 9.96L12.585 15.16C12.425 15.32 12.225 15.4 12.005 15.4Z" />
  </svg>
));

ChevronDown.displayName = 'ChevronDown';

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChevronDown;
