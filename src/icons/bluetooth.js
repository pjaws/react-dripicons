import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bluetooth = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.205 12L16.785 8.45998C17.105 8.15998 17.105 7.64006 16.785 7.34006L12.585 3.05998C12.365 2.81998 12.005 2.76 11.705 2.88C11.405 3 11.205 3.30004 11.205 3.62004V10.0401L8.36495 7.22004C8.04495 6.90004 7.54496 6.92004 7.22496 7.22004C6.90496 7.54004 6.92496 8.03998 7.22496 8.35998L10.905 12.02L7.22496 15.68C6.90496 16 6.90496 16.5 7.22496 16.82C7.38496 16.98 7.58495 17.06 7.78495 17.06C7.98495 17.06 8.18496 16.98 8.34496 16.82L11.185 14V20.42C11.185 20.74 11.385 21.04 11.685 21.16C11.785 21.2 11.885 21.22 11.985 21.22C12.205 21.22 12.405 21.14 12.565 20.98L16.7649 16.7C17.0649 16.38 17.0649 15.88 16.7649 15.58L13.205 12ZM12.805 5.55998L15.0649 7.88L12.805 10.1401V5.55998ZM12.805 18.4401V13.88L15.0649 16.1401L12.805 18.4401Z" />
  </svg>
));

Bluetooth.displayName = 'Bluetooth';

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bluetooth;
