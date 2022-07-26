import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DeviceDesktop = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.6851 4.2H4.32511C3.48511 4.2 2.80511 4.88002 2.80511 5.72002V14.58C2.80511 15.42 3.48511 16.2 4.32511 16.2H9.40511V17.02L7.88512 18.24C7.62512 18.46 7.50512 18.88 7.60511 19.2C7.72511 19.52 8.02512 19.8 8.36512 19.8H15.5651C15.9051 19.8 16.2251 19.52 16.3451 19.2C16.4651 18.88 16.3651 18.48 16.1051 18.26L14.6051 17.02V16.2H19.6851C20.5251 16.2 21.2051 15.42 21.2051 14.58V5.72002C21.2051 4.88002 20.5251 4.2 19.6851 4.2ZM13.4451 17.96L13.9251 18.4H10.0051L10.5251 17.94C10.6851 17.8 10.8051 17.56 10.8051 17.34V16.18H13.2051V17.34C13.2051 17.56 13.2851 17.82 13.4451 17.96ZM19.6051 14.6H4.40511V5.8H19.6051V14.6Z" />
  </svg>
));

DeviceDesktop.displayName = 'DeviceDesktop';

DeviceDesktop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DeviceDesktop.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default DeviceDesktop;
