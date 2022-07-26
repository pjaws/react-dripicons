import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bookmarks = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.4051 6.2H7.6051C7.1651 6.2 6.8051 6.49999 6.8051 6.93999V20.4C6.8051 20.72 7.0051 21.02 7.3051 21.14C7.4051 21.18 7.5051 21.2 7.6051 21.2C7.8251 21.2 8.0251 21.12 8.1851 20.96L10.4451 18.58L12.8251 20.98C13.0451 21.2 13.4051 21.28 13.7051 21.16C14.0051 21.04 14.2051 20.74 14.2051 20.42V6.96001C14.2051 6.50001 13.8451 6.2 13.4051 6.2ZM12.6051 18.46L11.0051 16.84C10.8451 16.68 10.6451 16.6 10.4451 16.6C10.2251 16.6 10.0251 16.7 9.8651 16.86L8.4251 18.4V7.8H12.6251V18.46H12.6051ZM17.0051 3.4V16.86C17.0051 17.24 16.6851 17.56 16.3051 17.56C15.9251 17.56 15.6051 17.24 15.6051 16.86V4.2H11.4051V4.46001C11.4051 4.84001 11.0851 5.16001 10.7051 5.16001C10.3251 5.16001 10.0051 4.84001 10.0051 4.46001V3.4C10.0051 3.02 10.2251 2.8 10.6051 2.8H16.4051C16.7851 2.8 17.0051 3.02 17.0051 3.4Z" />
  </svg>
));

Bookmarks.displayName = 'Bookmarks';

Bookmarks.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bookmarks.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Bookmarks;
