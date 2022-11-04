import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Direction = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.7851 20.4C12.7451 20.4 12.7051 20.4 12.6651 20.38C12.3051 20.32 12.0251 20.04 12.0051 19.68L11.3051 12.72L4.34509 12.02C3.98509 11.98 3.68509 11.7 3.64509 11.36C3.58509 11 3.7851 10.66 4.1051 10.5L19.3051 3.68001C19.6051 3.54001 19.9651 3.6 20.2051 3.84C20.4451 4.08 20.5051 4.44 20.3651 4.74L13.5451 19.94C13.3851 20.22 13.0851 20.4 12.7851 20.4ZM7.46511 10.74L12.0851 11.22C12.4651 11.26 12.7651 11.56 12.8051 11.94L13.2851 16.56L18.0051 6L7.46511 10.74Z" />
  </svg>
));

Direction.displayName = 'Direction';

Direction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Direction;
