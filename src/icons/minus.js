import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Minus = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.4051 12.9H7.60508C7.10508 12.9 6.70508 12.5 6.70508 12C6.70508 11.5 7.10508 11.1 7.60508 11.1H16.4051C16.9051 11.1 17.3051 11.5 17.3051 12C17.3051 12.5 16.9051 12.9 16.4051 12.9Z" />
  </svg>
));

Minus.displayName = 'Minus';

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minus.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Minus;
