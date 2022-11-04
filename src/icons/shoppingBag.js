import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShoppingBag = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.7651 7.83999C18.6051 7.67999 18.4051 7.6 18.2051 7.6H16.2051V7.23999C16.2051 4.89999 14.2851 3 12.0451 3H11.9651C9.72509 3 7.8051 4.89999 7.8051 7.23999V7.6H5.8051C5.3651 7.6 5.0051 7.97999 5.0051 8.43999V20.2C5.0051 20.64 5.3651 21 5.8051 21H18.2051C18.6451 21 19.0051 20.64 19.0051 20.2V8.42002C19.0051 8.22002 18.9251 7.99999 18.7651 7.83999ZM9.4051 7.23999C9.4051 5.77999 10.6051 4.6 11.9651 4.6H12.0451C13.4051 4.6 14.6051 5.77999 14.6051 7.23999V7.6H9.4051V7.23999ZM17.4051 19.4H6.6051V9.2H7.8051V10.58C7.8051 11.02 8.1651 11.38 8.6051 11.38C9.0451 11.38 9.4051 11.02 9.4051 10.58V9.2H14.6051V10.58C14.6051 11.02 14.9651 11.38 15.4051 11.38C15.8451 11.38 16.2051 11.02 16.2051 10.58V9.2H17.4051V19.4Z" />
  </svg>
));

ShoppingBag.displayName = 'ShoppingBag';

ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ShoppingBag;
