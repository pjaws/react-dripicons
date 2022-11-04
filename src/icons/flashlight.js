import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Flashlight = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.3651 12C11.3651 12.34 11.1051 12.6 10.7651 12.6H9.2451C8.9051 12.6 8.6451 12.34 8.6451 12C8.6451 11.66 8.9051 11.4 9.2451 11.4H10.7651C11.1051 11.4 11.3651 11.66 11.3651 12ZM21.2051 7.34001V16.68C21.2051 17.3 20.7051 17.82 20.0651 17.82H18.1451C14.8451 17.82 12.8651 16.02 12.1851 15.22H3.9451C3.3051 15.22 2.8051 14.7 2.8051 14.08V9.94001C2.8051 9.30001 3.3251 8.82004 3.9451 8.82004H12.1851C12.8651 8.02004 14.8451 6.22004 18.1451 6.22004H20.0651C20.7051 6.20004 21.2051 6.70001 21.2051 7.34001ZM4.4051 13.6H5.8051V10.4H4.4051V13.6ZM17.0051 16.12V7.88C14.6051 8.28 13.1851 10.04 13.1851 10.06C13.0251 10.28 12.8451 10.4 12.5851 10.4H7.0051V13.6H12.5651C12.8251 13.6 13.0251 13.72 13.1651 13.94C13.2251 14.02 14.6051 15.72 17.0051 16.12ZM19.6051 7.80002H18.2051V16.2H19.6051V7.80002Z" />
  </svg>
));

Flashlight.displayName = 'Flashlight';

Flashlight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Flashlight;
