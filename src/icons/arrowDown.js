import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowDown = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.745 12.72C18.625 12.42 18.325 12.2 18.005 12.2H15.405V4.8C15.405 4.36 14.945 4 14.505 4H9.50501C9.06501 4 8.60501 4.36 8.60501 4.8V12.2H6.00501C5.68501 12.2 5.38501 12.44 5.26501 12.72C5.14501 13.02 5.20501 13.38 5.42501 13.6L11.425 19.74C11.585 19.9 11.785 19.98 12.005 19.98C12.225 19.98 12.425 19.9 12.585 19.74L18.585 13.6C18.805 13.38 18.865 13.02 18.745 12.72ZM12.005 17.98L7.90501 13.8H9.50501C9.94501 13.8 10.205 13.52 10.205 13.08V5.6H13.805V13.08C13.805 13.52 14.065 13.8 14.505 13.8H16.105L12.005 17.98Z" />
  </svg>
));

ArrowDown.displayName = 'ArrowDown';

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowDown;
