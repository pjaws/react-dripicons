import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VolumeMedium = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.9251 3.65998C11.6251 3.53998 11.2851 3.59997 11.0651 3.83997L7.14509 7.79998H5.20509C4.76509 7.79998 4.40509 8.15998 4.40509 8.59998V15.4C4.40509 15.84 4.76509 16.2 5.20509 16.2H7.14509L11.0851 20.16C11.2451 20.32 11.4451 20.4 11.6451 20.4C11.7451 20.4 11.8251 20.38 11.9251 20.34C12.2251 20.22 12.4051 19.92 12.4051 19.6V4.39998C12.4051 4.07998 12.2251 3.77998 11.9251 3.65998ZM10.8051 17.66L8.02509 14.84C7.86509 14.68 7.68509 14.6 7.48509 14.6H6.00509V9.39998H7.48509C7.70509 9.39998 7.88509 9.31998 8.02509 9.15998L10.8051 6.33998V17.66ZM15.0251 15.38C14.8651 15.56 14.6451 15.64 14.4251 15.64C14.2451 15.64 14.0451 15.58 13.8851 15.44C13.5451 15.14 13.5251 14.64 13.8251 14.32C15.8251 12.08 14.0251 9.91997 13.8251 9.67998C13.5251 9.33997 13.5651 8.83998 13.9051 8.55998C14.2451 8.25998 14.7451 8.29998 15.0251 8.61998C16.0651 9.77998 17.4051 12.7 15.0251 15.38ZM17.4251 17.52C17.2651 17.7 17.0451 17.78 16.8251 17.78C16.6451 17.78 16.4451 17.72 16.2851 17.58C15.9451 17.28 15.9251 16.78 16.2251 16.46C20.1451 12.08 16.3851 7.71998 16.2251 7.53998C15.9251 7.19998 15.9651 6.69998 16.2851 6.41998C16.6251 6.11998 17.1251 6.15997 17.4051 6.47997C17.4851 6.51997 22.3051 12.06 17.4251 17.52Z" />
  </svg>
));

VolumeMedium.displayName = 'VolumeMedium';

VolumeMedium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeMedium.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default VolumeMedium;
