import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Folder = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.8051 7.4H11.9051L11.0251 5.97998C10.8851 5.73998 10.6251 5.6 10.3451 5.6H5.20509C4.76509 5.6 4.40509 5.96 4.40509 6.4V17.6C4.40509 18.04 4.76509 18.4 5.20509 18.4H18.8051C19.2451 18.4 19.6051 18.04 19.6051 17.6V8.22002C19.6051 7.78002 19.2451 7.4 18.8051 7.4ZM18.0051 16.8H6.00509V7.2H9.88509L10.7651 8.62002C10.9051 8.86002 11.1651 9 11.4451 9H18.0051V16.8Z" />
  </svg>
));

Folder.displayName = 'Folder';

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Folder.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Folder;
