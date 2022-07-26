import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Contract2 = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.9051 13.06C11.0651 13.22 11.1451 13.44 11.1451 13.64V17.82C11.1451 18.26 10.7851 18.58 10.3451 18.58H10.3651C9.92512 18.58 9.60511 18.28 9.60511 17.84V15.6L4.60511 20.58C4.44511 20.74 4.20511 20.82 4.00511 20.82C3.80511 20.82 3.6051 20.74 3.4451 20.58C3.1251 20.26 3.1251 19.74 3.4451 19.44L8.4251 14.44H6.1451C5.7051 14.44 5.3451 14.08 5.3451 13.64C5.3451 13.2 5.7051 12.84 6.1451 12.84H10.3451C10.5651 12.8 10.7651 12.9 10.9051 13.06ZM20.5651 3.44001C20.2451 3.12001 19.7651 3.12001 19.4451 3.44001L14.4051 8.50001V6.22001C14.4051 5.78001 14.0451 5.40001 13.5851 5.40001C13.1451 5.40001 12.7851 5.76001 12.7851 6.20001V10.4C12.7851 10.62 12.8651 10.8 13.0251 10.96C13.1851 11.12 13.3851 11.18 13.5851 11.18H17.7851C18.2251 11.18 18.5851 10.82 18.5851 10.38C18.5851 9.94002 18.2251 9.58002 17.7851 9.58002H15.5051L20.5651 4.54001C20.8851 4.24001 20.8851 3.74001 20.5651 3.44001Z" />
  </svg>
));

Contract2.displayName = 'Contract2';

Contract2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Contract2.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Contract2;
