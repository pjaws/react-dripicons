import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Browser = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.2051 5.4C21.2051 4.96 20.8451 4.6 20.4051 4.6H3.60511C3.16511 4.6 2.80511 4.96 2.80511 5.4V18.6C2.80511 19.04 3.16511 19.4 3.60511 19.4H20.4051C20.8451 19.4 21.2051 19.04 21.2051 18.6V5.4ZM19.6051 8H14.0051V6.2H19.6051V8ZM7.60511 8V6.2H9.60511V8H7.60511ZM10.8051 6.2H12.8051V8H10.8051V6.2ZM6.40511 6.2V8H4.40511V6.2H6.40511ZM4.40511 17.8V9.4H19.6051V17.8H4.40511Z" />
  </svg>
));

Browser.displayName = 'Browser';

Browser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Browser;
