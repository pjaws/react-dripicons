import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VolumeOff = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.8651 3.65999C10.5651 3.53999 10.2051 3.61999 9.96509 3.83999L6.10509 7.79999H4.20509C3.76509 7.79999 3.40509 8.15999 3.40509 8.59999V15.4C3.40509 15.84 3.76509 16.2 4.20509 16.2H6.10509L9.94509 20.16C10.1051 20.32 10.3051 20.4 10.5251 20.4C10.6251 20.4 10.7651 20.38 10.8651 20.34C11.1651 20.22 11.4051 19.92 11.4051 19.6V4.39999C11.4051 4.07999 11.1651 3.77999 10.8651 3.65999ZM9.80509 17.64L7.04509 14.86C6.88509 14.7 6.64509 14.62 6.42509 14.62H5.00509V9.41999H6.44509C6.66509 9.41999 6.90509 9.31999 7.06509 9.17999L9.82509 6.39999V17.64H9.80509ZM20.3851 14.4C20.6851 14.72 20.6851 15.22 20.3651 15.54C20.2051 15.7 20.0051 15.76 19.8051 15.76C19.6051 15.76 19.3851 15.68 19.2251 15.52L16.9251 13.16L14.6251 15.52C14.4651 15.68 14.2651 15.76 14.0451 15.76C13.8451 15.76 13.6451 15.68 13.4851 15.54C13.1651 15.24 13.1651 14.72 13.4651 14.4L15.8051 12L13.4651 9.59999C13.1651 9.27999 13.1651 8.77999 13.4851 8.45999C13.8051 8.15999 14.3051 8.15999 14.6251 8.47999L16.9251 10.84L19.2251 8.47999C19.5251 8.15999 20.0451 8.15999 20.3651 8.45999C20.6851 8.75999 20.6851 9.27999 20.3851 9.59999L18.0451 12L20.3851 14.4Z" />
  </svg>
));

VolumeOff.displayName = 'VolumeOff';

VolumeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VolumeOff;
