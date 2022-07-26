import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Graduation = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.7251 9.10003L12.3251 5.32002C12.1051 5.22002 11.8651 5.22002 11.6651 5.32002L3.26512 9.10003C2.98512 9.22003 2.80511 9.50003 2.80511 9.80003C2.80511 10.1 3.00511 10.38 3.28511 10.52L4.00511 10.86V13.66C4.00511 13.94 4.22511 14.16 4.50511 14.16C4.78511 14.16 5.00511 13.94 5.00511 13.66V11.4L6.20511 12.04V15.44C6.20511 15.58 6.24512 15.7 6.32512 15.82C6.40512 15.94 8.22511 18.66 11.9051 18.66C15.6851 18.66 17.4251 15.92 17.5051 15.82C17.5651 15.72 17.6251 15.58 17.6251 15.46V12.18L20.8051 10.56C21.0851 10.42 21.2451 10.14 21.2451 9.84002C21.2051 9.50002 21.0051 9.24003 20.7251 9.10003ZM16.2051 15.22C15.8051 15.7 14.4451 17.26 11.9051 17.26C9.42511 17.26 8.00511 15.72 7.60511 15.22V12.76L11.6451 14.82C11.7651 14.88 11.8851 14.9 12.0051 14.9C12.1251 14.9 12.2651 14.88 12.3851 14.82L16.2051 12.88V15.22ZM12.0051 13.2L5.44511 9.88003L12.0051 6.92002L18.5651 9.88003L12.0051 13.2ZM5.00511 14.86C5.14511 15 5.24511 15.22 5.24511 15.42C5.24511 15.62 5.16511 15.84 5.00511 15.98C4.86511 16.12 4.64511 16.22 4.44511 16.22C4.24511 16.22 4.02511 16.14 3.88511 15.98C3.74511 15.84 3.64511 15.62 3.64511 15.42C3.64511 15.22 3.72511 15 3.88511 14.86C4.02511 14.72 4.24511 14.62 4.44511 14.62C4.64511 14.62 4.84511 14.7 5.00511 14.86Z" />
  </svg>
));

Graduation.displayName = 'Graduation';

Graduation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Graduation.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Graduation;
