import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DocumentNew = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.5651 7.90001L14.1251 3.44C13.9651 3.28 13.7651 3.20001 13.5651 3.20001H6.00511C5.56511 3.20001 5.20511 3.56001 5.20511 4.00001V20C5.20511 20.44 5.56511 20.8 6.00511 20.8H18.0051C18.4451 20.8 18.8051 20.44 18.8051 20V8.46002C18.8051 8.24002 18.7251 8.04001 18.5651 7.90001ZM17.2051 8.80001H13.2051V4.80001H13.2451L17.2051 8.80001ZM6.80511 19.2V4.80001H11.6051V9.58002C11.6051 10.02 11.9451 10.4 12.3851 10.4H17.2051V19.2H6.80511Z" />
  </svg>
));

DocumentNew.displayName = 'DocumentNew';

DocumentNew.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentNew.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default DocumentNew;
