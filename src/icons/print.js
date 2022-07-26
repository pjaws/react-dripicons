import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Print = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.4051 6H16.4051V3.6C16.4051 3.26 16.2251 3 15.9051 3H8.10511C7.76511 3 7.60511 3.26 7.60511 3.6V6H3.60511C3.16511 6 2.80511 6.34 2.80511 6.78V15.96C2.80511 16.4 3.16511 16.8 3.60511 16.8H6.54511L6.06511 19.92C6.02511 20.12 6.08511 20.36 6.22511 20.52C6.36511 20.68 6.54511 20.8 6.76511 20.8H17.2651C17.4651 20.8 17.6651 20.66 17.8051 20.5C17.9451 20.34 18.0051 20.14 17.9651 19.94L17.4851 16.8H20.4051C20.8451 16.8 21.2051 16.4 21.2051 15.96V6.78C21.2051 6.34 20.8451 6 20.4051 6ZM8.80511 4.2H15.2051V6H8.80511V4.2ZM7.56511 19.4L8.32511 14.4H15.6851L16.4451 19.4H7.56511ZM19.6051 15.2H17.2251L16.9651 13.56C16.9051 13.22 16.6251 13 16.2651 13H7.72511C7.38511 13 7.08511 13.22 7.02512 13.56L6.76511 15.2H4.40511V7.6H19.6051V15.2ZM6.46511 9.6C6.46511 9.26 6.72511 9 7.06511 9H8.94512C9.28512 9 9.54511 9.26 9.54511 9.6C9.54511 9.94 9.28512 10.2 8.94512 10.2H7.06511C6.74511 10.2 6.46511 9.94 6.46511 9.6Z" />
  </svg>
));

Print.displayName = 'Print';

Print.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Print.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Print;
