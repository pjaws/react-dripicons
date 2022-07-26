import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VolumeLow = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.5451 3.65998C13.2451 3.53998 12.9251 3.59997 12.6851 3.83997L8.76513 7.79998H6.80513C6.36513 7.79998 6.00513 8.15998 6.00513 8.59998V15.4C6.00513 15.84 6.36513 16.2 6.80513 16.2H8.76513L12.7251 20.16C12.8851 20.32 13.0851 20.4 13.2851 20.4C13.3851 20.4 13.4451 20.38 13.5451 20.34C13.8451 20.22 14.0051 19.92 14.0051 19.6V4.39998C14.0051 4.07998 13.8451 3.77998 13.5451 3.65998ZM12.4051 17.66L9.62513 14.84C9.46513 14.68 9.30513 14.6 9.10513 14.6H7.60513V9.39998H9.08513C9.30513 9.39998 9.46513 9.31998 9.60513 9.15998L12.3851 6.33998V17.66H12.4051ZM16.6651 15.38C16.5051 15.56 16.2851 15.64 16.0651 15.64C15.8651 15.64 15.6851 15.58 15.5251 15.44C15.2051 15.14 15.1651 14.64 15.4651 14.32C17.5251 12.02 15.5451 9.77997 15.4651 9.67998C15.1651 9.35997 15.2051 8.83998 15.5251 8.55998C15.8451 8.25998 16.3651 8.29998 16.6451 8.61998C17.7051 9.77998 19.0651 12.7 16.6651 15.38Z" />
  </svg>
));

VolumeLow.displayName = 'VolumeLow';

VolumeLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeLow.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default VolumeLow;
