import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Weight = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.0451 9.02002C18.9651 8.22002 18.2851 7.6 17.4651 7.6H16.0051V7.23999C16.0051 4.89999 14.2851 3 12.0451 3H11.9651C9.74511 3 8.0051 4.89999 8.0051 7.23999V7.6H6.54509C5.72509 7.6 5.06511 8.22002 4.96511 9.02002L3.8051 20.1C3.7851 20.32 3.8451 20.56 4.0051 20.72C4.1651 20.88 4.3651 20.98 4.6051 20.98H19.4051C19.6251 20.98 19.8451 20.88 20.0051 20.72C20.1651 20.56 20.2251 20.32 20.2051 20.1L19.0451 9.02002ZM9.6051 7.23999C9.6051 5.77999 10.6251 4.6 11.9651 4.6H12.0451C13.3851 4.6 14.4051 5.77999 14.4051 7.23999V7.6H9.6051V7.23999ZM5.48511 19.4L6.54509 9.2H17.4251L18.4851 19.4H5.48511Z" />
  </svg>
));

Weight.displayName = 'Weight';

Weight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Weight.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Weight;
