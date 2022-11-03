import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DocumentDelete = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5651 7.90001L14.1251 3.44C13.9651 3.28 13.7651 3.20001 13.5651 3.20001H6.00511C5.56511 3.20001 5.20511 3.56001 5.20511 4.00001V20C5.20511 20.44 5.56511 20.8 6.00511 20.8H18.0051C18.4451 20.8 18.8051 20.44 18.8051 20V8.46002C18.8051 8.24002 18.7251 8.04001 18.5651 7.90001ZM17.2051 8.80001H13.2051V4.80001H13.2451L17.2051 8.80001ZM6.80511 19.2V4.80001H11.6051V9.58002C11.6051 10.02 11.9451 10.4 12.3851 10.4H17.2051V19.2H6.80511ZM14.3051 13.22L12.9851 14.54L14.3051 15.86C14.5851 16.14 14.5851 16.58 14.3051 16.84C14.1651 16.98 13.9851 17.04 13.8051 17.04C13.6251 17.04 13.4451 16.98 13.3051 16.84L12.0051 15.52L10.7051 16.84C10.5651 16.98 10.3851 17.04 10.2051 17.04C10.0251 17.04 9.84511 16.98 9.70511 16.84C9.42511 16.56 9.42511 16.12 9.70511 15.86L11.0251 14.54L9.70511 13.22C9.42511 12.94 9.42511 12.5 9.70511 12.24C9.98511 11.96 10.4251 11.96 10.6851 12.24L11.9851 13.56L13.2851 12.24C13.5651 11.96 14.0051 11.96 14.2651 12.24C14.5851 12.5 14.5851 12.94 14.3051 13.22Z" />
  </svg>
));

DocumentDelete.displayName = 'DocumentDelete';

DocumentDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentDelete.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default DocumentDelete;