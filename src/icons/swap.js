import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Swap = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.2052 13.9C21.2052 14.12 21.1252 14.32 20.9652 14.46L17.2452 18.16C17.0852 18.32 16.8852 18.38 16.6852 18.38C16.4852 18.38 16.2652 18.28 16.1252 18.14C15.8052 17.82 15.8052 17.3 16.1252 16.98L18.4652 14.58H10.6452C10.2052 14.58 9.84522 14.22 9.84522 13.78C9.84522 13.34 10.2052 12.98 10.6452 12.98H18.4652L16.1252 10.68C15.8052 10.36 15.8052 9.90002 16.1252 9.60002C16.4452 9.28002 16.9452 9.28002 17.2652 9.60002L20.9852 13.32C21.1252 13.48 21.2052 13.68 21.2052 13.9ZM5.54522 11H13.3652C13.8052 11 14.1652 10.64 14.1652 10.2C14.1652 9.76002 13.8052 9.40002 13.3652 9.40002H5.54522L7.88522 7.00002C8.20522 6.68002 8.20522 6.16001 7.88522 5.84001C7.56522 5.52001 7.06522 5.52004 6.74522 5.82004L3.02522 9.52004C2.86522 9.68004 2.78522 9.88 2.78522 10.08C2.78522 10.3 2.86522 10.5 3.02522 10.64L6.74522 14.36C6.90522 14.52 7.10522 14.6 7.30522 14.6C7.50522 14.6 7.72522 14.52 7.86522 14.36C8.18522 14.04 8.18522 13.58 7.86522 13.28L5.54522 11Z" />
  </svg>
));

Swap.displayName = 'Swap';

Swap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Swap.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Swap;