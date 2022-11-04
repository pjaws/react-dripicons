import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GraphBar = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.405 20.6C16.745 20.6 16.205 20.06 16.205 19.4V4.59999C16.205 3.93999 16.745 3.39999 17.405 3.39999C18.065 3.39999 18.605 3.93999 18.605 4.59999V19.4C18.605 20.06 18.065 20.6 17.405 20.6ZM13.205 19.4V9.48C13.205 8.82 12.665 8.28 12.005 8.28C11.345 8.28 10.805 8.82 10.805 9.48V19.4C10.805 20.06 11.345 20.6 12.005 20.6C12.665 20.6 13.205 20.06 13.205 19.4ZM7.80498 19.4V14.36C7.80498 13.7 7.26498 13.16 6.60498 13.16C5.94498 13.16 5.40498 13.7 5.40498 14.36V19.4C5.40498 20.06 5.94498 20.6 6.60498 20.6C7.26498 20.6 7.80498 20.06 7.80498 19.4Z" />
  </svg>
));

GraphBar.displayName = 'GraphBar';

GraphBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GraphBar;
