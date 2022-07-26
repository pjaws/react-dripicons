import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Crosshair = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0251 2.79999C12.0051 2.79999 12.0051 2.79999 12.0251 2.79999C12.0051 2.79999 12.0051 2.79999 12.0251 2.79999C6.94511 2.79999 2.80511 6.91999 2.80511 12C2.80511 17.06 6.92512 21.2 11.9851 21.2C17.0651 21.2 21.1851 17.08 21.1851 12C21.2051 6.93999 17.0851 2.79999 12.0251 2.79999ZM12.8051 19.56V17.5C12.8051 17.06 12.4451 16.7 12.0051 16.7C11.5651 16.7 11.2051 17.06 11.2051 17.5V19.56C7.60511 19.18 4.8251 16.36 4.4451 12.8H6.50511C6.94511 12.8 7.30511 12.44 7.30511 12C7.30511 11.56 6.94511 11.2 6.50511 11.2H4.4451C4.8251 7.63999 7.60511 4.81998 11.2051 4.43998V6.49999C11.2051 6.93999 11.5651 7.29999 12.0051 7.29999C12.4451 7.29999 12.8051 6.93999 12.8051 6.49999V4.43998C16.4051 4.81998 19.1851 7.63999 19.5651 11.2H17.5051C17.0651 11.2 16.7051 11.56 16.7051 12C16.7051 12.44 17.0651 12.8 17.5051 12.8H19.5651C19.1851 16.36 16.4051 19.18 12.8051 19.56Z" />
  </svg>
));

Crosshair.displayName = 'Crosshair';

Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crosshair.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Crosshair;
