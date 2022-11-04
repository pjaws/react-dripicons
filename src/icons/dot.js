import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dot = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0051 13.4C11.6451 13.4 11.2651 13.24 11.0051 12.98C10.7451 12.72 10.6051 12.36 10.6051 12C10.6051 11.64 10.7651 11.28 11.0051 11C11.2651 10.74 11.6251 10.6 12.0051 10.6C12.3651 10.6 12.7251 10.76 12.9851 11C13.2451 11.26 13.4051 11.62 13.4051 12C13.4051 12.36 13.2451 12.72 12.9851 12.98C12.7451 13.26 12.3651 13.4 12.0051 13.4Z" />
  </svg>
));

Dot.displayName = 'Dot';

Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dot;
