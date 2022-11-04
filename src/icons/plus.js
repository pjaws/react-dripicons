import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Plus = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.3051 12.1C17.3051 12.6 16.9051 13 16.4051 13H12.8051V16.4C12.8051 16.9 12.4051 17.3 11.9051 17.3C11.4051 17.3 11.0051 16.9 11.0051 16.4V13H7.60508C7.10508 13 6.70508 12.6 6.70508 12.1C6.70508 11.6 7.10508 11.2 7.60508 11.2H11.0051V7.60001C11.0051 7.10001 11.4051 6.70001 11.9051 6.70001C12.4051 6.70001 12.8051 7.10001 12.8051 7.60001V11.2H16.4051C16.9051 11.2 17.3051 11.6 17.3051 12.1Z" />
  </svg>
));

Plus.displayName = 'Plus';

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Plus;
