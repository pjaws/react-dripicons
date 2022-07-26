import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Suitcase = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.7651 7.57998C20.4851 7.29998 20.1051 7.2 19.7051 7.2H15.4051V4.8C15.4051 4.36 14.9451 4 14.5051 4H9.50511C9.06511 4 8.60511 4.36 8.60511 4.8V7.2H4.28512C3.46512 7.2 2.80511 7.77998 2.80511 8.57998V18.5C2.80511 19.32 3.46512 19.98 4.28512 19.98H19.7051C20.5251 19.98 21.1851 19.32 21.1851 18.5V8.6C21.2051 8.22 21.0451 7.85998 20.7651 7.57998ZM16.0051 8.8V18.4H8.00511V8.8H16.0051ZM10.2051 5.6H13.8051V7.2H10.2051V5.6ZM4.40511 8.8H6.80511V18.4H4.40511V8.8ZM19.6051 18.4H17.2051V8.8H19.6051V18.4Z" />
  </svg>
));

Suitcase.displayName = 'Suitcase';

Suitcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Suitcase.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Suitcase;
