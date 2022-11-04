import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DeviceTablet = forwardRef(
  ({ color = 'currentColor', size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.1251 18.2C13.1251 18.54 12.8651 18.8 12.5251 18.8H11.4851C11.1451 18.8 10.8851 18.54 10.8851 18.2C10.8851 17.86 11.1451 17.6 11.4851 17.6H12.5251C12.8651 17.6 13.1251 17.86 13.1251 18.2ZM19.4051 19.68C19.4051 20.52 18.7251 21.2 17.8851 21.2H6.1251C5.2851 21.2 4.6051 20.52 4.6051 19.68V4.32002C4.6051 3.48002 5.2851 2.8 6.1251 2.8H17.8851C18.7251 2.8 19.4051 3.48002 19.4051 4.32002V19.68ZM6.2051 4.4V15.4H17.8051V4.4H6.2051ZM17.8051 19.6V16.6H6.2051V19.6H17.8051Z" />
    </svg>
  )
);

DeviceTablet.displayName = 'DeviceTablet';

DeviceTablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DeviceTablet;
