import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Dots3 = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.0051 13.4C6.6451 13.4 6.2651 13.24 6.0051 12.98C5.7451 12.72 5.6051 12.36 5.6051 12C5.6051 11.64 5.7651 11.28 6.0051 11C6.2651 10.74 6.6251 10.6 7.0051 10.6C7.3651 10.6 7.72511 10.76 7.98511 11C8.24511 11.26 8.4051 11.62 8.4051 12C8.4051 12.36 8.24511 12.72 7.98511 12.98C7.74511 13.26 7.3651 13.4 7.0051 13.4ZM13.0051 12.98C13.2651 12.72 13.4251 12.36 13.4251 12C13.4251 11.64 13.2651 11.28 13.0051 11C12.7451 10.74 12.3851 10.6 12.0251 10.6C11.6651 10.6 11.2851 10.76 11.0251 11C10.7651 11.26 10.6251 11.62 10.6251 12C10.6251 12.36 10.7851 12.72 11.0251 12.98C11.2851 13.24 11.6451 13.4 12.0251 13.4C12.3651 13.4 12.7451 13.26 13.0051 12.98ZM18.0051 12.98C18.2651 12.72 18.4251 12.36 18.4251 12C18.4251 11.64 18.2651 11.28 18.0051 11C17.7451 10.74 17.3851 10.6 17.0251 10.6C16.6651 10.6 16.2851 10.76 16.0251 11C15.7651 11.26 15.6251 11.62 15.6251 12C15.6251 12.36 15.7851 12.72 16.0251 12.98C16.2851 13.24 16.6451 13.4 17.0251 13.4C17.3651 13.4 17.7451 13.26 18.0051 12.98Z" />
  </svg>
));

Dots3.displayName = 'Dots3';

Dots3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Dots3;
