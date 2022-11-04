import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DeviceMobile = forwardRef(
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
      <path d="M13.3851 18C13.3851 18.34 13.1251 18.6 12.7851 18.6H11.2451C10.9051 18.6 10.6451 18.34 10.6451 18C10.6451 17.66 10.9051 17.4 11.2451 17.4H12.7851C13.1051 17.4 13.3851 17.66 13.3851 18ZM17.2051 19.68C17.2051 20.52 16.5251 21.2 15.6851 21.2H8.32511C7.48511 21.2 6.80511 20.52 6.80511 19.68V4.32002C6.80511 3.48002 7.48511 2.8 8.32511 2.8H15.6851C16.5251 2.8 17.2051 3.48002 17.2051 4.32002V19.68ZM8.40511 4.4V15H15.6051V4.4H8.40511ZM15.6051 19.6V16.2H8.40511V19.6H15.6051Z" />
    </svg>
  )
);

DeviceMobile.displayName = 'DeviceMobile';

DeviceMobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DeviceMobile;
