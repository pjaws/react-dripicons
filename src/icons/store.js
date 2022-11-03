import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Store = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.805 13.9C10.805 13.52 10.485 13.2 10.105 13.2H7.50501C7.12501 13.2 6.80501 13.52 6.80501 13.9V16.5C6.80501 16.88 7.12501 17.2 7.50501 17.2H10.105C10.485 17.2 10.805 16.88 10.805 16.5V13.9ZM8.20501 14.6H9.40501V15.8H8.20501V14.6ZM20.985 7.87998L19.205 6.07998V4C19.205 3.56 18.845 3.2 18.385 3.2H5.60501C5.16501 3.2 4.78502 3.56 4.78502 4V6.07998L3.00501 7.87998C2.86501 8.01998 2.78502 8.24004 2.78502 8.44004V10.48C2.78502 10.92 3.14502 11.22 3.58502 11.22H20.385C20.825 11.22 21.185 10.94 21.185 10.48V8.44004C21.205 8.22004 21.125 8.01998 20.985 7.87998ZM17.605 4.8V5.8H6.40501V4.8H17.605ZM19.605 9.6H4.40501V8.75996L6.04501 7.2H17.965L19.605 8.75996V9.6ZM20.005 12.82V20C20.005 20.44 19.645 20.8 19.205 20.8H16.465C16.025 20.8 15.665 20.48 15.665 20.04V15.8H13.805V20C13.805 20.44 13.425 20.8 12.985 20.8H4.80501C4.36501 20.8 3.98502 20.44 3.98502 20V12.82C3.98502 12.38 4.34502 12.02 4.78502 12.02C5.22502 12.02 5.58502 12.38 5.58502 12.82V19.2H12.185V14.92C12.185 14.48 12.525 14.2 12.965 14.2H16.425C16.865 14.2 17.165 14.48 17.165 14.92V19.2H18.365V12.82C18.365 12.38 18.725 12.02 19.165 12.02C19.605 12.02 20.005 12.38 20.005 12.82Z" />
  </svg>
));

Store.displayName = 'Store';

Store.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Store.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Store;