import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Crop = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.5651 4.76002C20.8851 4.46002 20.8851 3.94001 20.5651 3.62001C20.2651 3.30001 19.7451 3.32001 19.4251 3.62001L17.0251 5.98002H7.00511V4.52001C7.00511 4.08001 6.64511 3.72001 6.20511 3.72001C5.76511 3.72001 5.40511 4.08001 5.40511 4.52001V5.98002H4.00511C3.56511 5.98002 3.20511 6.34002 3.20511 6.78002C3.20511 7.22002 3.56511 7.58002 4.00511 7.58002H5.40511V17.56C5.40511 17.58 5.4251 17.6 5.4251 17.62C5.4251 17.66 5.4451 17.68 5.4451 17.72C5.4451 17.74 5.46512 17.76 5.46512 17.8C5.46512 17.82 5.48511 17.86 5.48511 17.88C5.50511 17.9 5.5051 17.92 5.5251 17.96C5.5451 17.98 5.54512 18 5.56512 18.02C5.58512 18.04 5.6051 18.08 5.6251 18.1C5.6451 18.12 5.64512 18.12 5.66512 18.14C5.70512 18.18 5.74511 18.2 5.78511 18.24C5.80511 18.24 5.8051 18.26 5.8251 18.26C5.8651 18.28 5.9051 18.3 5.9451 18.32C5.9651 18.32 5.9851 18.34 6.0251 18.34C6.0451 18.34 6.08511 18.36 6.10511 18.36C6.16511 18.38 6.20512 18.38 6.26512 18.38H16.6451V19.78C16.6451 20.22 17.0051 20.58 17.4451 20.58C17.8851 20.58 18.2451 20.22 18.2451 19.78V18.38H19.6451C20.0851 18.38 20.4451 18.02 20.4451 17.58C20.4451 17.14 20.0851 16.78 19.6451 16.78H18.2451V7.06002L20.5651 4.76002ZM15.4051 7.60001L7.00511 15.7V7.60001H15.4051ZM16.6051 16.8H8.20511L16.6051 8.64V16.8Z" />
  </svg>
));

Crop.displayName = 'Crop';

Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crop.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Crop;
