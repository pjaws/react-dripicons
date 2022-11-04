import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Menu = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.4051 7.49999H5.60511C4.88511 7.49999 4.30511 6.91999 4.30511 6.19999C4.30511 5.47999 4.88511 4.89999 5.60511 4.89999H18.4051C19.1251 4.89999 19.7051 5.47999 19.7051 6.19999C19.7051 6.91999 19.1251 7.49999 18.4051 7.49999ZM19.7051 12C19.7051 11.28 19.1251 10.7 18.4051 10.7H5.60511C4.88511 10.7 4.30511 11.28 4.30511 12C4.30511 12.72 4.88511 13.3 5.60511 13.3H18.4051C19.1251 13.3 19.7051 12.72 19.7051 12ZM19.7051 17.8C19.7051 17.08 19.1251 16.5 18.4051 16.5H5.60511C4.88511 16.5 4.30511 17.08 4.30511 17.8C4.30511 18.52 4.88511 19.1 5.60511 19.1H18.4051C19.1251 19.1 19.7051 18.52 19.7051 17.8Z" />
  </svg>
));

Menu.displayName = 'Menu';

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Menu;
