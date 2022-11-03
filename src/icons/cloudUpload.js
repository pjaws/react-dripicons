import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudUpload = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.2051 13.1C21.0851 14.84 19.7251 16.74 17.0651 16.74C15.8451 16.74 15.2051 16.74 15.2051 16.74C14.7651 16.74 14.4051 16.4 14.4051 15.96C14.4051 15.52 14.7651 15.2 15.2051 15.2C15.2051 15.2 15.8451 15.16 17.0651 15.16C18.7251 15.16 19.5451 14.04 19.6251 12.98C19.7051 11.88 19.0051 10.66 17.3051 10.42C17.0851 10.38 16.8851 10.26 16.7651 10.08C16.6451 9.89999 16.6051 9.66 16.6451 9.44C16.8651 8.5 16.6251 7.76003 16.0051 7.42003C15.4851 7.12003 14.6451 7.14001 13.9651 7.80001C13.7851 7.98001 13.5251 8.06003 13.2851 8.02003C13.0451 7.98003 12.8251 7.82001 12.7051 7.60001C11.5451 5.42001 9.76511 5.31999 8.58511 5.87999C7.44511 6.41999 6.54511 7.76002 7.24511 9.46002C7.32511 9.66002 7.32511 9.90001 7.22511 10.1C7.12511 10.3 6.94511 10.46 6.74511 10.52C4.36511 11.26 4.40511 12.86 4.48511 13.32C4.62511 14.2 5.32511 15.1 6.40511 15.1L8.90511 15.12C9.34511 15.12 9.70511 15.5 9.70511 15.94C9.70511 16.38 9.34511 16.78 8.90511 16.78L6.42511 16.72C4.66511 16.72 3.20511 15.36 2.92511 13.54C2.70511 12.14 3.30511 10.26 5.54511 9.26002C5.02511 7.06002 6.26511 5.20003 7.94511 4.42003C9.66511 3.60003 12.0851 3.84002 13.6851 6.06002C14.6851 5.50002 15.8651 5.46003 16.8451 6.02003C17.6851 6.50003 18.4451 7.50001 18.3651 9.00001C20.4251 9.66001 21.3051 11.5 21.2051 13.1ZM14.8251 13.76C14.9851 13.92 15.1851 14 15.3851 14C15.5851 14 15.7851 13.92 15.9451 13.76C16.2651 13.44 16.2651 12.94 15.9451 12.62L12.5651 9.22003C12.4051 9.06003 12.2051 8.97999 12.0051 8.97999C11.7851 8.97999 11.5851 9.06003 11.4451 9.22003L8.06511 12.62C7.74511 12.94 7.74511 13.44 8.06511 13.76C8.38511 14.08 8.88511 14.08 9.20511 13.76L11.2251 11.72L11.2451 19.2C11.2451 19.64 11.6051 20 12.0451 20C12.4851 20 12.8451 19.64 12.8451 19.2L12.8251 11.74L14.8251 13.76Z" />
  </svg>
));

CloudUpload.displayName = 'CloudUpload';

CloudUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudUpload.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default CloudUpload;