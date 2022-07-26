import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bookmark = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.6051 2.8H8.4051C7.9651 2.8 7.6051 3.16 7.6051 3.6V20.4C7.6051 20.72 7.8051 21.02 8.1051 21.14C8.2051 21.18 8.3051 21.2 8.4051 21.2C8.6251 21.2 8.8251 21.12 8.9851 20.94L11.9251 17.82L15.0251 20.94C15.2451 21.16 15.6051 21.24 15.9051 21.12C16.2051 21 16.4051 20.7 16.4051 20.38V3.57998C16.4051 3.15998 16.0451 2.8 15.6051 2.8ZM14.8051 18.46L12.4851 16.08C12.3251 15.92 12.1251 15.8 11.9251 15.8C11.7051 15.8 11.5051 15.94 11.3451 16.1L9.2251 18.4V4.4H14.8251V18.46H14.8051Z" />
  </svg>
));

Bookmark.displayName = 'Bookmark';

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bookmark.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Bookmark;
