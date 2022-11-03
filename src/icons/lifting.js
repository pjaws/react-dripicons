import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Lifting = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.2051 7.19999V16.8C18.2051 17.24 17.8451 17.6 17.4051 17.6C16.9651 17.6 16.6051 17.24 16.6051 16.8V12.8H7.40508V16.8C7.40508 17.24 7.04508 17.6 6.60508 17.6C6.16508 17.6 5.80508 17.24 5.80508 16.8V7.19999C5.80508 6.75999 6.16508 6.39999 6.60508 6.39999C7.04508 6.39999 7.40508 6.75999 7.40508 7.19999V11.2H16.6051V7.19999C16.6051 6.75999 16.9651 6.39999 17.4051 6.39999C17.8451 6.39999 18.2051 6.75999 18.2051 7.19999ZM4.00508 8.37997C3.56508 8.37997 3.20508 8.73997 3.20508 9.17997V14.84C3.20508 15.28 3.56508 15.64 4.00508 15.64C4.44508 15.64 4.80508 15.28 4.80508 14.84V9.17997C4.80508 8.73997 4.44508 8.37997 4.00508 8.37997ZM20.0051 8.37997C19.5651 8.37997 19.2051 8.73997 19.2051 9.17997V14.84C19.2051 15.28 19.5651 15.64 20.0051 15.64C20.4451 15.64 20.8051 15.28 20.8051 14.84V9.17997C20.8051 8.73997 20.4451 8.37997 20.0051 8.37997Z" />
  </svg>
));

Lifting.displayName = 'Lifting';

Lifting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lifting.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Lifting;