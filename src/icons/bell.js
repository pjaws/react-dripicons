import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bell = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.62 17.1C18.28 17.1 17.76 16.32 17.76 11.42C17.76 7.58002 16.02 5.18002 13.02 4.82002V3.6C13.02 3.16 12.66 2.8 12.22 2.8C11.78 2.8 11.42 3.16 11.42 3.6V4.8C8.22001 5.06 6.36001 7.50002 6.36001 11.42C6.36001 16.32 5.78001 17.1 4.42001 17.1C3.98001 17.1 3.60001 17.4 3.60001 17.86C3.60001 18.3 3.94 18.62 4.38 18.62H9.58C9.64 19.22 9.82001 19.96 10.3 20.48C10.72 20.94 11.28 21.2 11.94 21.2C12.6 21.2 13.16 20.92 13.58 20.48C14.08 19.94 14.28 19.22 14.36 18.62H19.62C20.06 18.62 20.42 18.32 20.42 17.86C20.42 17.4 20.06 17.1 19.62 17.1ZM12.46 19.38C12.38 19.46 12.26 19.58 11.98 19.58C11.72 19.58 11.6 19.46 11.52 19.38C11.36 19.2 11.28 19 11.22 18.6H11.9C11.94 18.6 11.98 18.6 12.02 18.6C12.06 18.6 12.1 18.6 12.14 18.6H12.8C12.74 19 12.64 19.2 12.46 19.38ZM12.14 17C12.1 17 12.06 17 12.02 17C11.98 17 11.94 17 11.9 17H7.18C7.92 15.6 7.92001 13.42 7.92001 11.38C7.92001 8.11998 9.34001 6.4 11.9 6.4H12.12C14.68 6.4 16.1 8.11998 16.1 11.38C16.1 13.42 16.1 15.6 16.84 17H12.14ZM14.98 9.9C15 10.28 14.7 10.62 14.32 10.64C14.3 10.64 14.3 10.64 14.28 10.64C13.92 10.64 13.6 10.36 13.58 9.97998C13.52 9.07998 12.82 8.76002 12.74 8.72002C12.38 8.56002 12.22 8.16 12.36 7.8C12.5 7.44 12.9 7.28002 13.26 7.42002C13.34 7.46002 14.88 8.1 14.98 9.9Z" />
  </svg>
));

Bell.displayName = 'Bell';

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bell.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Bell;